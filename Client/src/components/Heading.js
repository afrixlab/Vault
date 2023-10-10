import Container from './Container';
const Heading = ({ top, center, bottom }) => {
  return (
    <>
      <Container className='flex flex-col gap-2 mx-auto text-center '>
        <h2 className='text-2xl font-[700]'>{top}</h2>
        <h3 className='font-[600] text-lg'>{center}</h3>
        <p className='text-sm text-white/70 '>{bottom}</p>
      </Container>
    </>
  );
};

export default Heading;
