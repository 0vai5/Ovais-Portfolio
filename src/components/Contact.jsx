import React, { useState } from 'react';
import Alert from './Alert';
import emailjs from '@emailjs/browser';


const Contact = () => {
  return (
    <section className="max-container">
       <Alert type={'success'} emoji={'😊'} message={'Successfully Sent'} />
     <Alert type={'failed'} emoji={'😥'} message={'Failed to Send'} />

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text text-[#fff]">Get in Touch</h1>

        <div className="px-15">
          <form className="w-full flex flex-col gap-7 mt-14" >
            

            <button type="submit" className="btn" >
              Send Something
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
