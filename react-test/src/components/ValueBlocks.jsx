import React from 'react';
import Block from './Block';

const ValueBlocks = () => {
  return (
    <div className='flex flex-col items-center lg:flex-row lg:justify-center'>
      <Block
        number='1'
        src='./image-assets/vid-chat.png'
        title='30-MINUTE VIDEO CONVERSATION'
        text='Get started with a free consultation to help us understand where our team can best help you build and grow your online business.'
      />
      <Block
        number='2'
        src='./image-assets/roadmap.png'
        title='DIAGNOSTIC ROADMAP'
        text='Within a week we’ll diagnose your biggest opportunities and build a custom roadmap to optimize your ecommerce experience.'
      />
      <Block
        number='3'
        src='./image-assets/growth.png'
        title='GROWTH SERVICES'
        text='Our team will start immediately taking action to make improvements and deliver a brand experience that drives lifetime value.'
      />
    </div>
  );
};

export default ValueBlocks;
