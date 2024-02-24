import React, { useState } from 'react';
import Alert from './Alert';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const emailJSPublicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({ name: "", email: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ovais",
          from_email: form.email,
          to_email: "rovais53@gmail.com",
          message: form.message,
        },
        emailJSPublicKey
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSuccess(true);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setIsFailed(true);
      })
      .finally(() => {
        setIsLoading(false);
        resetForm();
      });
  };
  

  return (
    <section className="max-container">
      {isSuccess && <Alert type={'success'} emoji={'😊'} message={'Successfully Sent'} />}
      {isFailed && <Alert type={'failed'} emoji={'😥'} message={'Failed to Send'} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text text-[#fff]">Get in Touch</h1>

        <div className="px-15">
          <form className="w-full flex flex-col gap-7 mt-10" onSubmit={handleSubmit}>
            <label className="text-[#d0baba] font-semibold">
              Name
              <br />
              <input
                type="text"
                className="input"
                placeholder="Asad"
                required
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </label>

            <label className="text-[#d0baba] font-semibold">
              Email
              <br />
              <input
                type="email"
                className="input"
                placeholder="example@email.com"
                required
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </label>

            <label className="text-[#d0dada] font-semibold">
              Message
              <br />
              <textarea
                type="text"
                className="textarea"
                placeholder="Message"
                required
                name="message"
                value={form.message}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className="btn" disabled={isLoading}>
              {isLoading ? "Sending.." : "Send Something"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
