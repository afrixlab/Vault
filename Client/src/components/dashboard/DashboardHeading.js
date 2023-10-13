'use client';
import { Avatar, Flex, Heading } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

const DashboardHeading = ({ name, image }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== '/dashboard/profile' ? (
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
            {`Welcome back, ${name} !`}
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
            name={name}
            src={image}
          />
        </Flex>
      ) : null}
    </>
  );
};

export default DashboardHeading;
