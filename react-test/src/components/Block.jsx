import React from 'react';

const Block = ({ number, src, title, text }) => {
  return (
    <div className='shadow-2xl mx-4 rounded-[7px] mb-4 max-w-[288px]'>
      <div className='bg-block rounded-t-[7px]'>
        <img src={src} alt='' className='h-[88px] w-full object-cover' />
      </div>
      <div className='rounded-b-[7px]'>
        <h2 className='font-semibold text-center px-8 pt-[15px]'>
          {number}. {title}
        </h2>
        <p className='text-center px-4 pt-[8px] pb-[23px]'>{text}</p>
      </div>
    </div>
  );
};

export default Block;
