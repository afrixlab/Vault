'use client';
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import SavingsForm from '../form/SavingsForm';

const savingItems = [
  {
    id: 1,
    amount: 1000,
    time: '4 months',
    progress: 20,
  },
  {
    id: 2,
    amount: 1250,
    time: '1 month',
    progress: 40,
  },
  {
    id: 3,
    amount: 1500,
    time: '2 months',
    progress: 60,
  },
  {
    id: 4,
    amount: 1750,
    time: '3 months',
    progress: 80,
  },
  {
    id: 5,
    amount: 2000,
    time: '4 months',
    progress: 100,
  },
];
const DashboardSavings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SavingsForm isOpen={isOpen} onClose={onClose} />
      <section className='flex flex-col gap-8'>
        <h3
          onClick={onOpen}
          className='font-[600] cursor-pointer lg:text-3xl flex items-center gap-2 self-end'
        >
          <IoAddCircleOutline /> New
        </h3>
        <div className='flex flex-col gap-4 overflow-y-auto h-[35rem] pr-2'>
          {savingItems.map((item) => (
            <SavingItem
              key={item.id}
              amount={item.amount}
              time={item.time}
              progress={item.progress}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DashboardSavings;

const SavingItem = ({ amount, time, progress }) => {
  return (
    <div className='sm:p-8 p-4 bg-card rounded-[1.25rem] flex sm:flex-row  justify-between flex-col gap-4'>
      <div className='flex flex-col gap-2 md:gap-6'>
        <p className='font-[600] lg:text-3xl text-white/70'>Safe Lock</p>
        <p className='font-[600] lg:text-3xl '>($) {amount}</p>
        <progress
          className='mt-1 progress-bar'
          value={progress}
          max='100'
        ></progress>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-[600] lg:text-3xl text-white/70'>Time Left:</p>
        <p className='font-[600]'>{time}</p>
      </div>
    </div>
  );
};
