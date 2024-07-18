import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Coca from '../assets/ff.png';

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
  const cocaRef = useRef(null);
  const circleRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const coca = cocaRef.current;
    const circle = circleRef.current;
    const texts = textRefs.current;

    // Image animation
    gsap.fromTo(
      coca,
      { opacity: 0, x: 300, rotate: 30 },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
        duration: 1,
        scrollTrigger: {
          trigger: coca,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );

    // Circle animation
    gsap.fromTo(
      circle,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: circle,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );

    // Red glowing shades animation
    gsap.to(circle, {
      boxShadow: '0 0 20px 20px rgba(255, 0, 0, 0.8)',
      repeat: -1,
      yoyo: true,
      duration: 1.5,
    });

    // Text animation
    gsap.fromTo(
      texts,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: texts[0],
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );

  }, []);

  return (
    <div className="relative h-screen  flex justify-start items-center overflow-hidden bg-neutral-950 px-10 md:px-20">
      <div className="absolute inset-0">
        {/* Background image placeholder */}
        <div className="w-full h-full bg-cover bg-no-repeat" style={{ backgroundImage: `url('path-to-background-image.jpg')` }}></div>
      </div>
      <div className="z-10 ml-2 text-white max-w-xl">
        <h1 ref={(el) => (textRefs.current[0] = el)} className="text-4xl md:text-6xl font-bold text-red-600">NUTRITIONAL BEVERAGES</h1>
        <p ref={(el) => (textRefs.current[1] = el)} className="text-md font-bold md:text-2xl mt-4">
          We are offering a portfolio of drinks with nutrition and hydration benefits, including juices, teas, waters, and other non-sparkling beverages.
        </p>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div ref={circleRef} className="w-80 h-80 rounded-full bg-black opacity-0">
        </div>
      </div>
      <div className="absolute bottom-20 right-10">
        <img ref={cocaRef} className="w-8/12 object-cover md:w-80" src={Coca} alt="Coca Cola" />
      </div>
    </div>
  );
};

export default FeatureSection;
