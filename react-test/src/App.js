import Divide from './components/Divide';
import Form from './components/Form';
import Header from './components/Header';
import Hero from './components/Hero';
import Trusted from './components/Trusted';
import ValueBlocks from './components/ValueBlocks';
import Footer from './components/Footer';

function App() {
  return (
    <div className='font-roboto relative'>
      <Header />
      <Hero />
      <Form />
      <Divide />
      <ValueBlocks />
      <Trusted />
      <Footer />
    </div>
  );
}

export default App;
