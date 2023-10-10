'use client';
import Container from '../Container';
import HowCard from './HowCard';
import Circle from './Circle';
import Heading from './../Heading';

const HowItWorks = () => {
  return (
    <section className='py-12 bg-center bg-no-repeat bg-cover bg-secondary'>
      <Heading
        top='How it Works'
        center='Save & invest cryptocurrency with ease'
        bottom='Create an account with these easy steps'
      />
      <Container>
        <section className='grid grid-cols-1 gap-4 mt-16 md:grid-cols-2'>
          <HowCard
            title='Sign Up'
            description='Create your account entering your name and email account'
          >
            <Circle progress={25} />
          </HowCard>
          <HowCard
            title='Log In'
            description='Log into your dashboard using your email and password'
          >
            <Circle progress={50} />
          </HowCard>
          <HowCard
            title='Fund Wallet'
            description='Send cryptocurrency to the wallet automatically created for you'
          >
            <Circle progress={75} />
          </HowCard>
          <HowCard
            title='Start Saving'
            description='Select a saving plan and timeframe to save your funds'
          >
            <Circle progress={100} />
          </HowCard>
        </section>
      </Container>
    </section>
  );
};

export default HowItWorks;
