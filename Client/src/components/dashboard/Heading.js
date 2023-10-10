'use client';
import { Avatar, Flex, Heading } from '@chakra-ui/react';

const DashboardHeading = () => {
  return (
    <>
      <Flex className='items-center justify-between -mt-[4.5rem] pb-8'>
        <Heading
          size={{
            base: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl',
            '2xl': '2xl',
          }}
        >
          Welcome CEN Smart !
        </Heading>
        <Avatar
          className='bg-[#158E7F]'
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
      </Flex>
    </>
  );
};

export default DashboardHeading;
