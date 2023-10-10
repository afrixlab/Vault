'use client';

import Link from 'next/link';

const company = [
  { name: 'About', link: '#' },
  { name: 'FAQs', link: '#' },
  { name: 'Blogs', link: '#' },
];

const legal = [
  { name: 'Terms of Service', link: '#' },
  { name: 'Privacy Policy', link: '#' },
  { name: 'Security', link: '#' },
];

const Links = () => {
  return (
    <div className='flex justify-between w-full gap-8 item-center sm:w-fit'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-[700]'>Company</h3>
        {company.map((item) => (
          <Link
            className='text-sm text-white/70'
            key={item.name}
            href={item.link}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-[700]'>Legal</h3>
        {legal.map((item) => (
          <Link
            className='text-sm text-white/70'
            key={item.name}
            href={item.link}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
