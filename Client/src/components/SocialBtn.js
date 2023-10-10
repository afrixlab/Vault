'use client';

import { Button } from '@chakra-ui/react';

const SocialBtn = ({ bgColor, image, alt,onClick,className }) => {
  return (
    <Button onClick={onClick} bgColor={bgColor} className={className}>
      <picture>
        <img src={image} alt={alt} className='h-8' />
      </picture>
    </Button>
  );
};

export default SocialBtn;
