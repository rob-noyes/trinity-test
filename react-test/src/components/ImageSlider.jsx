import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const ImageSlider = () => {
  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 5 },
  };
  return (
    <div className='m-auto max-w-full px-4 pb-6'>
      <AliceCarousel
        autoPlay
        autoPlayInterval='3000'
        responsive={responsive}
        disableButtonsControls
      >
        <img src='./image-assets/logo-one.png' alt='' className='px-2' />
        <img src='./image-assets/logo-two.png' alt='' className='px-2' />
        <img src='./image-assets/logo-three.png' alt='' className='px-2' />
        <img src='./image-assets/logo-four.png' alt='' className='px-2' />
        <img src='./image-assets/logo-five.png' alt='' className='px-2' />
        <img src='./image-assets/logo-six.png' alt='' className='px-2' />
        <img src='./image-assets/logo-seven.png' alt='' className='px-2' />
        <img src='./image-assets/logo-eight.png' alt='' className='px-2' />
      </AliceCarousel>
    </div>
  );
};
