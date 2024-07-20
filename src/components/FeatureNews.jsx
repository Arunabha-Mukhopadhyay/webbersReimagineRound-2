import React, { useEffect, useRef } from 'react';
import img1 from '../assets/2cans.png';
import img2 from '../assets/exo.png';
import img3 from '../assets/jdcoke.png';
import { gsap } from 'gsap';

const FeaturedNews = () => {
  const newsItems = [
    {
      image: img1, 
      title: 'Coca-Cola® Happy Tears Zero Sugar Celebrates Acts of Kindness With TikTok-Exclusive Creation',
      description: 'Celebrate "Real Magic" with a limited-edition drink inspired by acts of kindness, available exclusively on TikTok Shop.',
      linkText: 'Explore Happy Tears'
    },
    {
      image: img2,
      title: 'How The Coca-Cola System Refreshes Local Economies and Communities in Markets Around the World',
      description: 'The Coca-Cola system creates local jobs to make, distribute and sell our drinks that refresh local communities.',
      linkText: 'Explore'
    },
    {
      image: img3,
      title: 'Jack & Daniels and Coca-Cola RTD Launches in US',
      description: 'Jack Daniel’s & Coca-Cola RTD – a pre-mixed, canned cocktail that first launched last fall in Mexico – is set to hit stores in the United States.',
      linkText: 'Explore'
    }
  ];

  const cardref = useRef([]);
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardref.current[0], // Use the first card as the trigger
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });

    tl.fromTo(
      cardref.current,
      { opacity: 0, y:30},
      {
        opacity: 1,
        y:0,
        duration: 1,
        stagger:0.2,
      }
    );
  },[])

  return (
    <div className="p-5 overflow:hidden relative bg-neutral-950">
      <h2 className="text-center text-white text-3xl font-bold mb-5">Featured News</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {newsItems.map((item, index) => (
           <div ref={(el) => (cardref.current[index] = el)} className="bg-white rounded-lg shadow-lg w-full sm:w-80 md:w-1/3 lg:w-1/4 mb-6" key={index}>
            <img src={item.image} alt={item.title} className="w-full h-auto rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <a href="#" className="text-blue-500 hover:underline">{item.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNews;
