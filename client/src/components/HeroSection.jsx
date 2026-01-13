import React from 'react'
import {assets} from "../assets/assets"
import { ArrowRight, Calendar, Clock, StarIcon } from 'lucide-react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay ,Keyboard , EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { useNavigate } from 'react-router-dom';




const HeroSection = () => {


const randomSlide = Math.floor(Math.random() * 4)

const navigate = useNavigate();

  return (
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay , Keyboard ,EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
    autoplay={{
        delay: 5000,                // 5 seconds per slide
        disableOnInteraction: false // keep autoplay after swipe
      }}
    //   navigation
    effect="fade"
    speed={3000}
    fadeEffect={{ crossFade: true }}
    initialSlide={randomSlide}
    keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    className="h-screen pb-10 pointer-events-none"
    >
      <SwiperSlide>
         <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/avatar.jpg")] bg-cover bg-center h-screen pointer-events-auto'>
        {/* <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20 ' /> */}
        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'
        >Avatar <br /> Fire and Ash</h1>

        <div className='flex items-center gap-4 text-gray-300'>

            <span>Action | Adventure | Sci-Fi </span>

            <div className='flex items-center gap-1'>
                <Calendar className='w-4.5 h-4.5'/> 2025
            </div>

              <div className='flex items-center gap-1'>
                <Clock className='w-4.5 h-4.5'/> 2h 8m
            </div>

             <div className='flex items-center gap-1'>
                <StarIcon className='w-4.5 h-4.5'/> IMDB 7.4
            </div>
        </div>

        <p className='max-w-md text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam tempore quaerat nostrum aliquid asperiores deserunt vitae, optio iste aliquam? Beatae.</p>

        <button 
        onClick={()=>navigate('/movies')}
        className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium curosr-pointer'>
            Explore Movies
            <ArrowRight className='w-5 h-5'/>
        </button>

        </div>
      </SwiperSlide>

      <SwiperSlide>
         <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/ironman.jpg")] bg-cover bg-center h-screen pointer-events-auto'>
        {/* <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20 ' /> */}
        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'
        >Avatar <br /> Fire and Ash</h1>

        <div className='flex items-center gap-4 text-gray-300'>

            <span>Action | Adventure | Sci-Fi </span>

            <div className='flex items-center gap-1'>
                <Calendar className='w-4.5 h-4.5'/> 2025
            </div>

              <div className='flex items-center gap-1'>
                <Clock className='w-4.5 h-4.5'/> 2h 8m
            </div>

             <div className='flex items-center gap-1'>
                <StarIcon className='w-4.5 h-4.5'/> IMDB 7.4
            </div>
        </div>

          <p className='max-w-md text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam tempore quaerat nostrum aliquid asperiores deserunt vitae, optio iste aliquam? Beatae.</p>

        <button 
        onClick={()=>navigate('/movies')}
        className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium curosr-pointer'>
            Explore Movies
            <ArrowRight className='w-5 h-5'/>
        </button>
        </div>
      </SwiperSlide>

      <SwiperSlide> <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/thor.png")] bg-cover bg-center h-screen pointer-events-auto'>
        {/* <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20 ' /> */}
        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'
        >Avatar <br /> Fire and Ash</h1>

        <div className='flex items-center gap-4 text-gray-300'>

            <span>Action | Adventure | Sci-Fi </span>

            <div className='flex items-center gap-1'>
                <Calendar className='w-4.5 h-4.5'/> 2025
            </div>

              <div className='flex items-center gap-1'>
                <Clock className='w-4.5 h-4.5'/> 2h 8m
            </div>

             <div className='flex items-center gap-1'>
                <StarIcon className='w-4.5 h-4.5'/> IMDB 7.4
            </div>
        </div>

          <p className='max-w-md text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam tempore quaerat nostrum aliquid asperiores deserunt vitae, optio iste aliquam? Beatae.</p>

        <button 
        onClick={()=>navigate('/movies')}
        className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium curosr-pointer'>
            Explore Movies
            <ArrowRight className='w-5 h-5'/>
        </button>
        </div>
        </SwiperSlide>

      <SwiperSlide>
         <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/endgame.jpg")] bg-cover bg-center h-screen pointer-events-auto'>
        {/* <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20 ' /> */}
        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'
        >Avatar <br /> Fire and Ash</h1>

        <div className='flex items-center gap-4 text-gray-300'>

            <span>Action | Adventure | Sci-Fi </span>

            <div className='flex items-center gap-1'>
                <Calendar className='w-4.5 h-4.5'/> 2025
            </div>

              <div className='flex items-center gap-1'>
                <Clock className='w-4.5 h-4.5'/> 2h 8m
            </div>

             <div className='flex items-center gap-1'>
                <StarIcon className='w-4.5 h-4.5'/> IMDB 7.4
            </div>
        </div>

          <p className='max-w-md text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam tempore quaerat nostrum aliquid asperiores deserunt vitae, optio iste aliquam? Beatae.</p>

        <button 
        onClick={()=>navigate('/movies')}
        className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium curosr-pointer'>
            Explore Movies
            <ArrowRight className='w-5 h-5'/>
        </button>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
   
  )
}

export default HeroSection