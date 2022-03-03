import React from 'react';

const Hero = () => {
  return (
    <div className='w-full px-4 text-white bg-phonebg  border-x border-border'>
      <h2 className='text-4xl font-playfairDisplay font-semibold  leading-snug'>
        Gain new insight to grow digital revenues faster.
      </h2>
      <p className='pt-4 text-xl'>
        Sign up for your <span className='font-semibold'>FREE</span> Website
        Strategy Session ($795 value)
      </p>
      <div className='py-4 leading-6 font-normal'>
        <p>
          In a <span className='font-semibold'>FREE</span> consultation
          discussion with our CEO,{' '}
          <span className=' underline'>Craig Smith</span> you will receive a
          live website review, complete with our toolsets, to help you
          understand what digital growth opportunities exist in your business.
        </p>
        <p className='pt-4'>Within your strategy session you will receive:</p>
        <ul className='list-disc list-outside px-4 pb-[96.5px]'>
          <li className='py-4'>
            An expert analysis of your eCommerce store or website
          </li>
          <li className='pb-4'>Diagnostic SEO Crawl Report</li>
          <li className='pb-4'>Site Speed & Performance Assessment</li>
          <li className='pb-4'>User Experience Review and Recommendations</li>
          <li className='pb-4'>Email & Marketing Automation Review</li>
          <li className='pb-4'>No Obligations & 100% FREE</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
