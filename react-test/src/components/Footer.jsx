import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col items-center bg-phonebg text-white p-4'>
      <div>
        <img
          src='./image-assets/emblem-white.png'
          alt=''
          className='w-[40px] h-full'
        />
      </div>
      <div className='text-center pt-4'>
        <p>© 2020 Trinity Insight, LLC. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
