// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import ProductSection from './components/ProductSection';
import FooterSection from "./components/FooterSection"
import FeatureNews from "./components/FeatureNews"


const App = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className="mt-0">
        <HeroSection />
        <FeatureSection />
        <ProductSection />
        <FeatureNews />
        <FooterSection />
      </div>
    </div>
  )
}

export default App;
