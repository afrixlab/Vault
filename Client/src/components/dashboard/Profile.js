'use client';
import { Avatar } from '@chakra-ui/react';
import React from 'react';

const DashboardProfileCard = () => {
  return (
    <>
      <h3 className='text-2xl lg:text-4xl font-[700] -mt-12 pl-4 xl:-ml-[15rem] ml-4'>Profile</h3>
      <div className='flex flex-col items-center justify-center w-full gap-4 pt-12 lg:pt-24'>
        <Avatar
          className='bg-[#158E7F] mx-auto'
          size={{
            base: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl',
            '2xl': '2xl',
          }}
          name='CEN Smart'
          src='#'
        />
        <h3 className='text-2xl lg:text-4xl font-[700] -mt-12 text-center pt-12'>
          CEN Smart
        </h3>
      </div>
    </>
  );
};

export default DashboardProfileCard;
