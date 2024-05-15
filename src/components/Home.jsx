import React from 'react';
import image from '../assets/landing_svg.png';

const Home = () => {

    return(
        <div className='flex justify-center items-center m-2 p-2'>
            <div className='flex flex-col w-[58%]'>
                <h1 className='text-3xl font-semibold my-5'>Welcome to <br /> <span className='text-[#1A8500]'>Fosec</span></h1>
                <p className='text-[#363636] font-medium my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores dolorum <br /> accusamus modi, culpa soluta. Atque dignissimos ea, non maxime explicabo <br /> corrupti modi error illum, ducimus distinctio illo laudantium voluptas.</p>
                <button className="font-medium text-white border border-[#E0E0E0] my-6 px-5 py-2 rounded-md bg-[#0F4901] hover:text-[#E0E0E0] w-1/4">Get Started</button>
            </div>
            <div className='w-[40%]'><img src={image} alt="Welcome to Fosec" className='w-[90%]' /></div>
            
        </div>
    );
}
export default Home;