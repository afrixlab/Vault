import React from 'react';

const Button = ({ children, title, type, className }) => {
  return (
    <button
      type={type}
      className={`mt-4 hover:scale-105 md:mt-0 shadow-secondary  bg-button py-2 px-6 font-[600] rounded active:scale-95 transition duration-200 ${className} `}
    >
      {title}
      {children && <span className='ml-4'>{children}</span>}
    </button>
  );
};

export default Button;
