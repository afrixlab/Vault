'use client';

const FeatureGrid = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col items-center gap-2 text-center '>
      <span className='grid w-10 h-10 bg-white rounded-full place-items-center'>
        {icon}
      </span>
      <h3 className='font-[600]'>{title}</h3>
      <p className='text-sm text-white/70'>{description}</p>
    </div>
  );
};

export default FeatureGrid;
