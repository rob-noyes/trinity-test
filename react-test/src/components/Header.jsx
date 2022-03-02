import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white '>
      <div className='w-full text-center bg-phonebgdark py-2 '>
        <h3>
          Give us a call! <span className='font-semibold'>866-535-8807</span>
        </h3>
      </div>
      <div className='bg-phonebg w-full flex flex-col justify-center items-center border-x border-border'>
        <img
          src='../image-assets/trinity-white.png'
          className='w-140 py-9'
          alt=''
        />
      </div>
    </div>
  );
};

export default Header;
