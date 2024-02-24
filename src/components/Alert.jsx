import React from 'react';

const Alert = ({ type, emoji, message }) => {
  return (
    <div
      role="alert"
      className={`flex max-w-[300px] p-2 rounded-full items-center justify-center leading-none lg:rounded-full  lg:inline-flex ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      <span className="font-semibold mr-2 text-left flex-auto">
    {emoji} {message}
  </span>
      
      {/* SVG for closing the alert */}
      {/* <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="fill-current opacity-75 h-4 w-4">
        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path>
      </svg> */}
    </div>
  );
};

export default Alert;
