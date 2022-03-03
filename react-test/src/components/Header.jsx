import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white lg:flex-row-reverse lg:bg-phonebg lg:border-x lg:border-border lg:justify-between lg:px-16 lg:pt-[77px] lg:pb-[63px]'>
      <div className='w-full text-center bg-phonebgdark py-2 lg:bg-inherit lg:text-right lg:text-xl'>
        <h3>
          Give us a call! <span className='font-semibold'>866-535-8807</span>
        </h3>
      </div>
      <div className='bg-phonebg w-full flex flex-col justify-center items-center border-x border-border lg:border-none lg:block'>
        <img
          src='../image-assets/trinity-white.png'
          className='w-140 py-9 lg:max-w-[215px] lg:w-full lg:py-0'
          alt=''
        />
      </div>
    </div>
  );
};

export default Header;
