import React from 'react';
import farmers from '../assets/farmers_image.png';
import customers from '../assets/customers_image.png';
import transportation from '../assets/vehicles_image.png';

const Services = () => {

    return (
        <div className='flex flex-col items-center mt-5 m-2 p-2'>
            <h1 className='text-xl font-semibold'>Our <span className='text-[#1A8500]'>Services</span></h1>
            <div className='flex border-[#E9E9E9] border-2 justify-between my-4 h-60 w-11/12 '>
                <img src={farmers} alt="Farmers" className='object-cover w-1/4 h-full' />
                <div className='w-[65%] my-2 mx-5' >
                    <h5 className='font-semibold my-1'>Our farmers</h5>
                    <p className='text-[#363636] font-medium text-base my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores dolorum accusamus modi, culpa soluta. Atque dignissimos ea, non maxime explicabo corrupti modi error illum, ducimus distinctio illo laudantium voluptas.</p>
                    <p className='text-[#363636] font-medium text-base my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores dolorum accusamus modi, culpa soluta. Atque dignissimos ea, non maxime explicabo corrupti modi error illum, ducimus distinctio illo laudantium voluptas.</p>
                </div>
            </div>
            <div className='flex border-[#E9E9E9] border-2 justify-between my-4 h-60 w-11/12 '>
                
                <div className='w-[65%] my-2 mx-5' >
                    <h5 className='font-semibold my-1'>Our customers</h5>
                    <p className='text-[#363636] font-medium text-base my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores dolorum accusamus modi, culpa soluta. Atque dignissimos ea, non maxime explicabo corrupti modi error illum, ducimus distinctio illo laudantium voluptas.</p>
                    <p className='text-[#363636] font-medium text-base my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores dolorum accusamus modi, culpa soluta. Atque dignissimos ea, non maxime explicabo corrupti modi error illum, ducimus distinctio illo laudantium voluptas.</p>
                </div>
                <img src={customers} alt="We take care of our customers" className='object-cover w-1/4 h-full' />
            </div>
            <div className='flex border-[#E9E9E9] border-2 justify-between my-4 h-60 w-11/12 '>
                <img src={transportation} alt="We transport your goods" className='object-cover w-1/4 h-full' />
                <div className='w-[65%] my-2 mx-5' >
                    <h5 className='font-semibold my-1'>Transportation</h5>
                    <h5 className='font-semibold my-2'>Linking lives connecting destinations</h5>
                    <p className='text-[#363636] font-medium text-base my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores dolorum accusamus modi, culpa soluta. Atque dignissimos ea, non maxime explicabo corrupti modi error illum, ducimus distinctio illo laudantium voluptas.</p>
                    <p className='text-[#363636] font-medium text-base my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores dolorum accusamus modi, culpa soluta. Atque dignissimos ea, non maxime explicabo corrupti modi error illum, ducimus distinctio illo laudantium voluptas.</p>
                </div>
            </div>
        </div>
    );
}
export default Services;
