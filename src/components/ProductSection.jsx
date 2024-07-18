import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import coca from '../assets/back1.png';
import fanta from '../assets/fanta.webp';
import sweeps from '../assets/sweeps.png';
import sprite from '../assets/spritee.png';
import back3 from '../assets/back3.png';
import back4 from '../assets/back4.avif';
import back5 from '../assets/back5.jpeg';
import back6 from '../assets/back6.jpeg';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'Coca Cola',
    size: '330ml, 500ml',
    backgroundImage: back3,
    textColor: 'text-white',
    image: coca, 
  },
  {
    name: 'Fanta',
    size: '330ml, 500ml',
    backgroundImage: back4,
    textColor: 'text-orange-900',
    image: fanta, 
  },
  {
    name: 'Schweppes',
    size: '300ml, 500ml',
    backgroundImage: back5,
    textColor: 'text-yellow-900',
    image: sweeps, 
  },
  {
    name: 'Sprite',
    size: '300ml, 500ml',
    backgroundImage: back6,
    textColor: 'text-green-800',
    image: sprite, 
  },
];

const ProductSection = () => {
  const sectionsRef = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, scale:0.5, rotate:10},
        {
          opacity: 1,
          scale:1,
          rotate:0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: true,
          },
        }
      );
    });

    gsap.fromTo(
      textRefs.current,
      { opacity: 0, x: 300, y: -400 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRefs.current[0].parentNode,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className='relative w-full bg-neutral-950 min-h-screen overflow-hidden text-white p-8'>
      <p className='text-red-600 font-mono font-bold text-start text-4xl md:text-6xl'>
        {['P', 'r', 'o', 'd', 'u', 'c', 't', 's',':'].map((char, index) => (
          <span key={index} ref={(el) => (textRefs.current[index] = el)}>{char}</span>
        ))}
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        {products.map((product, index) => (
          <motion.div
            ref={el => sectionsRef.current[index] = el}
            key={index}
            className='rounded-lg p-20 text-6xl flex flex-col border-white border-solid items-start justify-center relative overflow-hidden'
            style={{
              backgroundImage: `url(${product.backgroundImage || ''})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '300px',
              minWidth: '330px',
            }}
          >
            <div className='absolute right-0 place-content-end rotate-12'>
              <img src={product.image} alt={product.name} className='h-50 w-60 object-contain ' />
            </div>
            <div className='mt-4'>
              <h2 className={`text-2xl font-bold ${product.textColor}`}>{product.name}</h2>
              <p className={`text-lg ${product.textColor}`}>{product.size}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
