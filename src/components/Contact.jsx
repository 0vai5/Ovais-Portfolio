import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className='max-container'>
        <div className="flex-1 min-w-[50%] flex flex-col ">
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
                  formNoValidate = 'true'
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
                    minLength: { value: 20, message: 'Message is too short' },
                  })}
                />
                {errors.message && (
                  <span className="error-text">{errors.message.message}</span>
                )}
              </label>

              <button type="submit" className="btn">
                Send Something
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
