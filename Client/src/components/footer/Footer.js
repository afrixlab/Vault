'use client';
import Container from '../Container';
import Logo from '../header/Logo';
import Links from './Links';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className='bg-[#158E7f] py-12'>
      <Container>
        <div className='flex flex-col items-center justify-between gap-4 pb-8 border-b sm:flex-row border-b-white/70'>
          <Links />
          <Logo className='w-16 h-16 my-4 sm:my-0' image={`/logo-footer.svg`} />
          <Socials />
        </div>
        <p className='pt-4 text-sm text-center text-white/70'>
          &copy; Copyright reserved. Property of Vault.{' '}
          {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
