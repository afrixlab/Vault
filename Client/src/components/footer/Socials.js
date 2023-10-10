'use client';
import Link from 'next/link';
import {
  BiLogoFacebook,
  BiLogoYoutube,
  BiLogoInstagramAlt,
} from 'react-icons/bi';

import { RiTwitterXFill } from 'react-icons/ri';

const socials = [
  { name: BiLogoFacebook, link: 'https://facebook.com' },
  { name: RiTwitterXFill, link: 'https://twitter.com' },
  { name: BiLogoInstagramAlt, link: 'https://instagram.com' },
  { name: BiLogoYoutube, link: 'https://youtube.com' },
];

const Socials = () => {
  return (
    <div className='flex flex-col items-center gap-2 sm:items-end'>
      <div className='flex items-center gap-3'>
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.link}
            target='_blank'
            rel='noreferrer '
            noopenner
          >
            <span className='sr-only'>{social.name}</span>
            <social.name />
          </Link>
        ))}
      </div>
      <p className='text-sm text-white/70'>contact@vaultsavings.com</p>
      <p className='text-sm text-white/70'>+234 012 345 6789</p>
    </div>
  );
};

export default Socials;
