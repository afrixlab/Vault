'use client';
import React from 'react';
import Container from '../Container';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  return (
    <section className='pb-12 pt-28 '>
      <Container className='flex flex-col items-center gap-6 mx-auto xl:gap-20 md:flex-row'>
        <div className='flex flex-col w-[100%] md:w-[50%] gap-4'>
          <h1 className='mb-6 text-2xl font-[800] md:text-4xl  2xl:text-[3rem] 2xl:leading-[3.5rem]'>
            Save & Invest In Crypto
          </h1>
          <p className='text-md text-white/70'>
            Saving Made Simple, Earnings Made Easy
          </p>
          <Button
            onClick={() => {
              router.push('/form');
            }}
            title='Get Started'
          />
        </div>
        <div className='relative w-full h-full md:h-[50%] md:w-[50%]'>
          <picture>
            <img
              className='object-cover w-full h-full shrink-0'
              src='/hero.svg'
              alt='Logo'
            />
          </picture>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
