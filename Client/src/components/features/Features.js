'use client';
import Heading from '../Heading';
import FeatureGrid from './FeatureGrid';
import { RiWallet3Fill } from 'react-icons/ri';
import { BsUbuntu } from 'react-icons/bs';
import { MdOutlineSecurity } from 'react-icons/md';
import Container from '../Container';

const Features = () => {
  return (
    <div className='bg-[#158E7F] py-12'>
      <Container>
        <Heading
          top='Features'
          center='Services provided to guarantee your comfort'
          bottom='Open a full-featured account in less than 5 minutes'
        />

        <div className='grid mt-24 gap-x-4 gap-y-8 grid-cols-auto-fit'>
          <FeatureGrid
            icon={<RiWallet3Fill className='text-[#158E7F] text-2xl' />}
            title='Multi-Currency Wallet'
            description='Access to wallet supporting multiple cryptocurrencies, including Bitcoin and Solana'
          />
          <FeatureGrid
            icon={<MdOutlineSecurity className='text-[#158E7F] text-2xl' />}
            title='User Authentication and Security'
            description='Robust security measures to protect users accounts and cryptocurrency assets'
          />
          <FeatureGrid
            icon={<BsUbuntu className='text-[#158E7F] text-2xl' />}
            title='Blockchain Integration'
            description='Blockchain transaction are integrated for locking and unlocking of funds'
          />
        </div>
      </Container>
    </div>
  );
};

export default Features;
