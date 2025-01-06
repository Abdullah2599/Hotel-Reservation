import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { EffectFade, Autoplay } from 'swiper/modules'
import Img1 from '/assets/img/heroSlider/1.jpg'
import Img2 from '/assets/img/heroSlider/2.jpg'
import Img3 from '/assets/img/heroSlider/3.jpg'

const slides =[
  {
    title: 'Explore Luxury Rooms For Vacation',
    bg: Img1,
    btnText: 'Roms & Suites'
  },
  {
    title: 'Find the tremendous facilities',
    bg: Img2,
    btnText: 'Explore Facilities'
  },
  {
    title: 'Your perfect vacation starts here',
    bg: Img3,
    btnText: 'Book Now'
  }

]

function HeroSlider() {
  return (
   <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop={true} autoplay={{delay: 3000, disableOnInteraction: false}} 
   className='heroSlider h-[600px] lg:h-[860px]'>
    {slides.map((slide, index) => {
      const {title, bg, btnText} = slide;
      return( <SwiperSlide className='h-full bg-pink-400 relative flex justify-center 
      items-center' key={index} >
         <div className='z-10 text-white text-center absolute top-1/3 left-1/2 -translate-x-1/2'>
          <div className='uppercase font-tertiary tracking-[6px] mb-5'>
            Discover
          </div>
          <h1 className='text-[32px] font-primary uppercase tracking-[2px] 
          max-w-[920px] lg:text-[68px] leading-tight mb-6'>{title}</h1>
          <button className='btn btn-lg btn-primary mx-auto'>{btnText}</button>
         </div>
         <div className='absolute top-0 w-full h-full'>
          <img src={bg} className='object-cover w-full h-full' alt="" />
         </div>
         <div className='absolute w-full h-full bg-black/70'></div>
        </SwiperSlide>);
    })}
   </Swiper>
  );
}

export default HeroSlider
