import  { Fragment } from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import SpecialOffersSlider from './components/specialOffersSlider/SpecialOffersSlider';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
    </Fragment>
   
  );
}

export default App;
