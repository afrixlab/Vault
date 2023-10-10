'use client';
import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import cn from '@/utils/classmerge';
import Button from './../ui/Button';

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'Save', link: '/save' },
  { name: 'About', link: '/about' },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className='py-2 pt-5 z-[90]'>
      <Container className='flex flex-col items-center justify-between md:flex-row'>
        <nav className='flex gap-8'>
          {menuItems.map((item) => (
            <Link
              className={cn(` text-white/70`, {
                'font-bold border-b-4 text-white  border-b-emerald-400':
                  pathname === item.link,
              })}
              href={item.link}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div>
          <Logo image={`/logo-header.svg`} className='w-16 h-16' />
        </div>
        <Link href='/form'>
          <Button title='Sign In' />
        </Link>
      </Container>
    </header>
  );
};

export default Navbar;
