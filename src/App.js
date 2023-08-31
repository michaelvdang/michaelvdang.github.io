import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Specialties from './components/Specialty';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    // <div className='bg-site bg-no-repeat bg-cover bg-blend-color-burn overflow-hidden'>
    <div className='bg-slate-900 overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Specialties />
      <Work />
      <Contact />
      <div className='h-[200px]'></div>
    </div>
  );
};

export default App;
