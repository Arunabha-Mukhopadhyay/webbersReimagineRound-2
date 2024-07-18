import React from 'react';

const FooterSection = () => {
  return (
    <footer className="w-full relative bg-neutral-900 flex flex-col justify-center items-center p-6">  
      <ul className='flex flex-col lg:flex-row justify-evenly border-b-4 border-solid border-white mb-20 gap-6 lg:gap-3 w-full lg:w-3/4'>
        <li className='mb-5'>
          <h1 className='text-red-600 font-medium text-3xl mb-3'>Contact</h1>
          <h2 className='text-white text-lg mb-2'>Customer Care</h2>
          <h2 className='text-white text-lg'>Feedback</h2>
        </li>
        <li>
          <h1 className='text-red-600 font-medium text-3xl mb-3'>Coca-Cola Cares</h1>
          <h2 className='text-white text-lg'>Nutrition Information</h2>
        </li>
        <li>
          <h1 className='text-red-600 font-medium text-3xl mb-3'>Legal</h1>
          <h2 className='text-white text-lg mb-2'>Privacy Policy</h2>
          <h2 className='text-white text-lg'>Terms & Conditions</h2>
        </li>
      </ul>
    </footer>
  );
};

export default FooterSection;
