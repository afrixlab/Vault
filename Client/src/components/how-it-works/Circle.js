const Circle = ({ progress }) => {
  return (
    <div className='pb-10'>
      <svg
        width='120'
        height='120'
        viewBox='0 0 160 160'
        style={{ transform: ' rotate(-90deg)' }}
      >
        <circle
          r='70'
          cx='80'
          cy='80'
          fill='transparent'
          stroke='#e0e0e0'
          strokeWidth='20px'
        ></circle>
        <circle
          r='70'
          cx='80'
          cy='80'
          fill='transparent'
          className=' bg-gradient-to-r from-[#43D680] to-[#158E7F] bg-clip-text text-transparent'
          stroke='#158E7F'
          strokeLinecap='round'
          strokeWidth='20px'
          strokeDasharray='439.6px'
          strokeDashoffset={`${439.6 * ((100 - progress) / 100)}px`}
        ></circle>
      </svg>
    </div>
  );
};

export default Circle;
