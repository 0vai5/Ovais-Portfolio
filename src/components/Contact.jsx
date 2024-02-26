import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Alert from './Alert';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    setIsSubmitting(true)
    await emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.fullname,
          to_name: "Ovais",
          from_email: data.email,
          to_email: "rovais53@gmail.com",
          message: data.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then((response) => {
        setIsSubmitting(false)
        reset()
        setShowSuccessAlert(true)
        console.log("Response Recieved: " + response)



      }).catch((error) => {
        console.log('Error in sending email: ' + error);
        setShowErrorAlert(true)
      })
  };

  return (
    <>

      <section className='max-container'>
        <div className="flex-1 min-w-[50%] flex flex-col ">
          {showSuccessAlert && <Alert type={'success'} emoji={'😃'} message={'Thank you for your message'} />}
          {showErrorAlert && <Alert type={'error'} emoji={'😢'} message={"I didn't recieve Anything "} />}
          <h1 className="head-text text-[#fff]">Get in Touch</h1>

          <div className="px-15">
            <form
              className="w-full flex flex-col gap-7 mt-14"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="text-[#d0baba] font-semibold">
                Name
                <br />
                <input
                  type="text"
                  className="input"
                  placeholder="Asad"
                  {...register('fullname', { required: 'Name is required' })}
                />
                {errors.fullname && (
                  <span className="error-text">{errors.fullname.message}</span>
                )}
              </label>

              <label className="text-[#d0baba] font-semibold">
                Email
                <br />
                <input
                  type="email"
                  className="input"
                  placeholder="example@gmail.com"
                  formNoValidate='true'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <span className="error-text">{errors.email.message}</span>
                )}
              </label>

              <label className="text-[#d0baba] font-semibold">
                Message
                <br />
                <textarea
                  className="textarea"
                  placeholder="What do you want to say?"
                  {...register('message', {
                    required: 'Message is required',
                    maxLength: { value: 300, message: 'Message is too long' },
                    minLength: { value: 5, message: 'Message is too short' },
                  })}
                />
                {errors.message && (
                  <span className="error-text">{errors.message.message}</span>
                )}
              </label>

              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Something'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
