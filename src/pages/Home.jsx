import React, { useEffect } from 'react'
import Rooms from '../components/Rooms'
import BookForm from '../components/BookForm'
import HeroSlider from '../components/HeroSlider'
import About from '../components/AboutSection';
import Benefits from '../components/Benefits';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      < HeroSlider/>
      <div className='container mx-auto relative'>
        <div className='bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute 
        lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12'>
      <BookForm/>
      </div>
      </div>
      <About/>
      <Benefits/>
      <Rooms/>
     
      </>
  );
}

export default Home
