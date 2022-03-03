import Divide from './components/Divide';
import Form from './components/Form';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueBlocks from './components/ValueBlocks';
import Footer from './components/Footer';
import { ImageSlider } from './components/ImageSlider';

function App() {
  return (
    <div className='font-roboto relative'>
      <Header />
      <div className='lg:flex lg:flex-row lg:justify-around lg:w-full lg:bg-white lg:px-16 lg:border-x lg:border-border desktop-bg'>
        <Hero />
        <Form />
      </div>
      <Divide />
      <ValueBlocks />
      <div className='flex flex-col items-center py-8 px-4'>
        <h3 className='font-bold text-form text-lg leading-[25px] tracking-[1.64px]'>
          TRUSTED BY:
        </h3>
      </div>

      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
