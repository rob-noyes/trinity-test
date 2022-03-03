import React from 'react';

function Block({ number, src, title, text }) {
  return (
    <div className='shadow-2xl mx-4 rounded-[7px] mb-4'>
      <div className='bg-block rounded-t-[7px]'>
        <img src='./image-assets/vid-chat.png' alt='' />
      </div>
      <div className='rounded-b-[7px]'>
        <h2 className='font-semibold text-center px-8 pt-[15px]'>
          {number}. {title}
        </h2>
        <p className='px-4 pt-[8px] pb-[23px]'>{text}</p>
      </div>
    </div>
  );
}

export default Block;
