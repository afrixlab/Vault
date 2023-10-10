import React from 'react';

const HowCard = ({ children, title, description }) => {
  return (
    <div className='flex flex-col items-center gap-2 text-center bg-[#031D0B] h-80 p-4 justify-center rounded-[1.25rem] shadow-secondary hover:scale-105 transition duration-200 '>
      {children && children}
      <h3 className='font-[600] lg:text-3xl'>{title}</h3>
      <p className='text-sm text-white/70'>{description}</p>
    </div>
  );
};

export default HowCard;
