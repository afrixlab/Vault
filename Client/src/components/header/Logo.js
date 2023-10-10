'use client';
import { useRouter } from 'next/navigation';

const Logo = ({ className, image }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/')}
      className={` cursor-pointer ${className}`}
    >
      <picture>
        <img className='w-full h-full' src={image} alt='Logo' />
      </picture>
    </div>
  );
};

export default Logo;
