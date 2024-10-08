import React from 'react';
import image from '../assets/landing_svg.png';

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center m-2 p-2'>
      {/* Text Section */}
      <div className='flex flex-col w-full md:w-[58%]'>
        <h1 className='text-3xl font-semibold my-5  dark:text-white'>
          Welcome to <br /> <span className='text-[#1A8500]'>Fosec</span>
        </h1>
        <p className='text-[#363636] font-medium my-6  dark:text-[#E9E9E9]'>
          At FOSEC, we believe in transforming agriculture through the power of technology. Our platform provides farmers with the tools they need to improve yields, make smarter decisions, and secure their supply chains. Whether you're a farmer looking for real-time advice or a customer seeking transparency in the food you consume, FOSEC is here to make a difference. Together, we’re creating a sustainable future for farming and food security.
        </p>
        <button className="font-medium text-white border border-[#E0E0E0] my-6 px-5 py-2 rounded-md bg-[#0F4901] hover:text-[#E0E0E0] w-full md:w-1/2 lg:w-1/4 dark:border-none">
          Get Started
        </button>
      </div>
      
      {/* Image Section */}
      <div className='w-full md:w-[40%] flex justify-center mt-6 md:mt-0'>
        <img src={image} alt="Welcome to Fosec" className='w-[90%] md:w-full' />
      </div>
    </div>
  );
};

export default Home;
