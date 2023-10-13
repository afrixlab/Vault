'use client';
import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { GoShieldCheck } from 'react-icons/go';
import { IoWalletOutline } from 'react-icons/io5';
import SavingsForm from '../form/SavingsForm';

const cardItems = [
  { title: 'Total Savings', value: 100, icon: GoShieldCheck, action: 'New' },
  { title: 'Wallet', value: 10, icon: IoWalletOutline, action: 'Fund' },
];
const DashboardCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSavings = (action) => {
    action === 'New' ? onOpen() : null;
  };

  return (
    <>
    <SavingsForm isOpen={isOpen} onClose={onClose}/>
      <Flex className='flex-col gap-4 pt-6 '>
        {cardItems.map((item, i) => (
          <Box
            className='bg-card rounded-[1.25rem] p-8 shadow-secondary relative overflow-hidden '
            key={item.title}
          >
            <item.icon className='h-[10rem] w-[12rem] absolute bottom-[-48px] right-[-45px] text-white/50' />
            <Flex className='flex-col gap-8'>
              <Flex className='items-center justify-between'>
                <h3 className='font-[600] lg:text-3xl text-white/70'>
                  {item.title}
                </h3>
                <Text
                  onClick={() => handleSavings(item.action)}
                  className='flex items-center gap-1 cursor-pointer'
                >
                  <AiOutlinePlusCircle />
                  {item.action}
                </Text>
              </Flex>
              <p className=' text-white lg:text-3xl font-[700] pb-28 '>
                ($) {item.value}K
              </p>
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default DashboardCard;
