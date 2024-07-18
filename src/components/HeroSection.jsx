import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';
import { gsap } from 'gsap';
import Coca from '../assets/ff.png';
import video1 from '../assets/video1.mp4';
import Logo from "../assets/logo2.png";
import Back from "../assets/aa.jpeg";

const HeroSection = () => {
  const heroData = [
    { text1: "CLASSIC IS ALWAYS CLASSIC", text2: "Taste The Feeling", text3: "Refresh The World, Make a Difference" },
    { text1: "YOU DON'T KNOW ZERO", text2: "TIL YOU HAVE TRIED IT", text3: "zero Sugar, zero Calories" },
    { text1: "Coca Cola", text2: "Night", text3: "Coca Cola Night contains additional caffeine to maximize the feeling of alertness." }
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  const backRef = useRef(null);
  const canRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(canRef.current, { scale: 0.8, rotateY: 10, rotateX: -10 }, { scale: 1, rotateY: 0, rotateX: 0, duration: 0.5 })
      .fromTo(backRef.current, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.3');
  }, []);

  useEffect(() => {
    if (!playStatus) {
      gsap.to(canRef.current, { opacity: 1, duration: 0.5 });
      gsap.to(backRef.current, { opacity: 1, duration: 0.5 });
    } else {
      gsap.to(canRef.current, { opacity: 0, duration: 0.5 });
      gsap.to(backRef.current, { opacity: 0, duration: 0.5 });
    }
  }, [playStatus]);

  return (
    <main className="relative min-h-screen bg-black">
      
      <div className="absolute inset-0 z-0 bg-black">
        
        {playStatus ? (
          <video
            src={video1}
            autoPlay
            loop
            muted
            className='h-full w-full object-cover top-0 left-0 right-0 bottom-0 p-0 fixed z-0'
          />
        ) : (
          <>
            <motion.img
              ref={backRef}
              src={Back}
              alt="Splash Background"
              className='h-screen w-full object-cover top-12 left-0 right-0 bottom-0 p-0 fixed z-0 opacity-0'
            />
            <motion.img
              ref={canRef}
              src={Coca}
              alt=""
              className='h-full w-full object-contain top-12 left-0 right-0 bottom-0 p-0 fixed z-0'
              initial={{ scale: 0.8, rotateY: 10, rotateX: -10 }}
              animate={{ scale: 1, rotateY: 0, rotateX: 0 }}
              transition={{ duration: 0.5 }}
            />
          </>
        )}
      </div>

       {/* Right Side Content */}
      <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5,delay: 0.3, ease: "easeInOut" }}
          className="absolute w-80 rounded-md top-56 left-4 sm:left-2 right-4 lg:right-auto lg:left-8 z-20 backdrop-blur-lg bg-black/50 p-4"
        >
          <img className='w-48 mb-4 mx-auto' src={Logo} alt="Logo" />
          <h1 className='text-red-600 text-3xl font-bold text-center mb-4'>
            Always Best Served Chilled
          </h1>
          <p className='text-white text-center'>
           Coca-Cola is the world's favourite soft drink and has been enjoyed since 1886. Find it in various sizes to suit every lifestyle and occasion.
          </p>
        </motion.div>
      

      {/* Play Button */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5,delay: 0.3, ease: "easeInOut" }}
        className='h-10 absolute lg:bottom-40 lg:right-4 bottom-4 left-4 lg:left-auto lg:right-8 lg:bottom-10 z-10'
      >
        <button
          onClick={() => setPlayStatus(!playStatus)}
          className="flex items-center bg-white text-red-700 font-medium hover:bg-gradient-to-r from-amber-400 to-amber-900 hover:text-white px-4 py-2 rounded-full border-2 border-white transition duration-300 ease-in-out"
        >
          <div className="bg-black rounded-full p-2 mr-2">
            {playStatus ? <FaPause /> : <FaPlay />}
          </div>
          <span>{playStatus ? 'Pause Video' : 'See the Video'}</span>
        </button>
      </motion.div>
    </main>
  );
}

export default HeroSection;
