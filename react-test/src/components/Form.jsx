import React from 'react';

const Form = () => {
  return (
    <div className=' h-[600px] relative flex justify-end items-center mx-4 lg:w-full lg:h-full lg:mx-0'>
      <div className='w-full absolute -top-[6rem] bg-white flex justify-center rounded-mdlg flex-col shadow-2xl py-8 lg:static lg:w-[600px] lg:px-12 lg:pt-[43px] lg:pb-12'>
        <div className='flex justify-center items-center flex-col pb-4'>
          <p className='text-[#CE427A] font-bold text-lg tracking-form '>
            FREE
          </p>
          <p className=' font-playfairDisplay font-semibold text-[22px] text-phonebg lg:text-4xl lg:pb-[49px]'>
            Website Strategy Session
          </p>
        </div>
        <form action='' className='px-4 text-form w-full text-center'>
          <div className='flex flex-col pb-[21.5px] text-left'>
            <label htmlFor='fname' className=' text-base font-normal pb-2'>
              First Name
            </label>
            <input
              type='text'
              name='fname'
              className='border border-input rounded-[3px] h-[46px]'
            />
          </div>
          <div className='flex flex-col pb-[21.5px] text-left'>
            <label htmlFor='lname' className=' text-base font-normal pb-2'>
              Last Name
            </label>
            <input
              type='text'
              name='lname'
              className='border border-input rounded-[3px] h-[46px]'
            />
          </div>
          <div className='flex flex-col pb-[21.5px] text-left'>
            <label htmlFor='website' className=' text-base font-normal pb-2'>
              Website
            </label>
            <input
              type='text'
              name='website'
              className='border border-input rounded-[3px] h-[46px]'
            />
          </div>
          <div className='flex flex-col pb-[21.5px] text-left '>
            <label htmlFor='email' className=' text-base font-normal pb-2'>
              Email *
            </label>
            <input
              type='email'
              name='email'
              className='border border-input rounded-[3px] h-[46px]'
            />
          </div>
          <div className='flex flex-col pb-[21.5px] text-left lg:pb-8'>
            <label htmlFor='phone' className=' text-base font-normal pb-2'>
              Phone Number
            </label>
            <input
              type='tel'
              name='phone'
              className='border border-input rounded-[3px] h-[46px]'
            />
          </div>
          <input
            type='submit'
            value='REQUEST SESSION'
            className='bg-phonebg text-white py-[10px] px-[22.5px] rounded-[3px] '
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
