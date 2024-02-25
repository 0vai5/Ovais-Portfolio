<<<<<<< HEAD
import React from 'react'

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact
=======
import React, { useState } from 'react';
import Alert from './Alert';


const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  return(
    <section className="max-container">
   <Alert type={'success'} emoji={'😊'} message={'Successfully Sent'} />
    <Alert type={'failed'} emoji={'😥'} message={'Failed to Send'} />

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text text-[#fff]">Get in Touch</h1>

        <div className="px-15">
          <form className="w-full flex flex-col gap-7 mt-10">
            <label className="text-[#d0baba] font-semibold">
              Name
              <br />
              <input
                type="text"
                className="input"
                placeholder="Asad"
                required
                name="name"
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
>>>>>>> a659aa1d9ede0f2ec97303b04942de62a645f313
