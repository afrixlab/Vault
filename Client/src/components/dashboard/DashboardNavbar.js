'use client';
import React from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import cn from '@/utils/classmerge';
import { AiOutlineClose } from 'react-icons/ai';

import { FiMenu } from 'react-icons/fi';
import { GoHome, GoShieldCheck } from 'react-icons/go';
import { IoWalletOutline, IoLogOut } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import Logo from '../header/Logo';

const navItems = [
  { name: 'Home', icon: GoHome, href: '/dashboard' },
  { name: 'Savings', icon: GoShieldCheck, href: '/dashboard/savings' },
  { name: 'Wallet', icon: IoWalletOutline, href: '/dashboard/wallet' },
  { name: 'Profile', icon: CgProfile, href: '/dashboard/profile' },
];

const DashboardNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <Box className='pt-1 pb-4 drop-shadow-2xl'>
      <Center>
        <Logo className='w-16 h-16' image={'/logo-footer.svg'} />
      </Center>
      <Flex className='flex-col lg:mt-8' gap={2}>
        {navItems.map((item) => (
          <Link
            onClick={handleToggle}
            href={item.href}
            key={item.name}
            className={cn(
              `pl-10 md:pl-16 sidebar -translate-x-full transition-all duration-300 lg:-translate-x-0`,
              {
                'bg-black font-[700]': pathname === item.href,
                'translate-x-0': isOpen,
              }
            )}
          >
            <item.icon className='text-2xl' />
            <span className=' text-md'>{item.name}</span>
          </Link>
        ))}
        <Flex
          className={cn(
            `md:pl-16 lg:mt-64 transition-all duration-300 pl-10 mt-[-16rem] justify-between items-center`,
            {
              'mt-0': isOpen,
            }
          )}
        >
          <Box
            onClick={() => router.push('/form')}
            className={cn(`flex items-center gap-2 cursor-pointer `, {
              'hidden lg:flex': !isOpen,
            })}
          >
            <IoLogOut className='text-2xl' />
            <span className='text-md'>Logout</span>
          </Box>
          <button
            onClick={handleToggle}
            className='px-2 py-1 mr-10 text-2xl text-white bg-button lg:hidden shadow-secondary'
          >
            {isOpen ? <AiOutlineClose /> : <FiMenu />}
          </button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DashboardNavbar;
