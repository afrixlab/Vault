import React from 'react';

import { TbStackPush } from 'react-icons/tb';

const activitycards = [
  {
    name: 'to safe lock',
    icon: TbStackPush,
    amount: 1000,
    date: new Date().toLocaleDateString(),
  },
  {
    name: 'to safe lock',
    icon: TbStackPush,
    amount: 1000,
    date: new Date().toLocaleDateString(),
  },
  {
    name: 'to safe lock',
    icon: TbStackPush,
    amount: 1000,
    date: new Date().toLocaleDateString(),
  },
  {
    name: 'to safe lock',
    icon: TbStackPush,
    amount: 1000,
    date: new Date().toLocaleDateString(),
  },
  {
    name: 'to safe lock',
    icon: TbStackPush,
    amount: 1000,
    date: new Date().toLocaleDateString(),
  },
  {
    name: 'to safe lock',
    icon: TbStackPush,
    amount: 1000,
    date: new Date().toLocaleDateString(),
  },
  {
    name: 'to safe lock',
    icon: TbStackPush,
    amount: 1000,
    date: new Date().toLocaleDateString(),
  },
  {
    name: 'to safe lock',
    icon: TbStackPush,
    amount: 1000,
    date: new Date().toLocaleDateString(),
  },
  {
    name: 'to safe lock',
    icon: TbStackPush,
    amount: 1000,
    date: new Date().toLocaleDateString(),
  },
];

const RecentActivity = () => {
  return (
    <>
      <h3 className='mb-8 font-[600] lg:text-3xl'>Recent Activities</h3>
      <div className='flex flex-col gap-4'>
        {activitycards.map((item, i) => (
          <div
            key={i}
            className='flex items-center w-full bg-[#158E7F]/50  rounded-[0.625rem] p-4  gap-2'
          >
            <item.icon className='bg-[#17CB50] h-8 p-1  w-8 rounded-full' />
            <div className='text-sm text-white/70'>
              <p>
                <span>{item.amount} Added </span>
                {item.name}
              </p>

              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentActivity;
