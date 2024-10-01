import React from 'react';
import farmers from '../assets/farmers_image.png';
import customers from '../assets/customers_image.png';
import transportation from '../assets/vehicles_image.png';

const Services = () => {
    return (
        <div className='flex flex-col items-center mt-5 m-2 p-2'>
            <h1 className='text-xl font-semibold'>Our <span className='text-[#1A8500]'>Services</span></h1>

            {/* Farmers Section */}
            <div className='flex flex-col md:flex-row border-[#E9E9E9] border-2 justify-between my-4 '>
                <img src={farmers} alt="Farmers" className='object-cover w-full md:w-1/4 h-auto' />
                <div className='w-full md:w-[65%] my-2 mx-5'>
                    <h5 className='font-semibold my-1'>Our farmers</h5>
                    <p className='text-[#363636] font-medium text-base my-4'>
                        FOSEC is here to help farmers navigate today’s challenges with real-time weather updates and personalized farming tips. Our platform uses machine learning to provide tailored advice on crop management, pest control, and sustainable farming practices. Whether you manage a small farm or a large operation, FOSEC empowers you to make informed decisions that boost productivity.
                    </p>
                    <p className='text-[#363636] font-medium text-base my-4'>
                        We also create a supportive community by offering a secure network for farmers to connect, share knowledge, and collaborate. From improving soil health to water conservation strategies, FOSEC ensures that you have the tools and support you need to succeed in agriculture.
                    </p>
                </div>
            </div>

            {/* Customers Section */}
            <div className='flex flex-col md:flex-row-reverse border-[#E9E9E9] border-2 justify-between my-4 '>
                <img src={customers} alt="We take care of our customers" className='object-cover w-full md:w-1/4 h-auto' />
                <div className='w-full md:w-[65%] my-2 mx-5'>
                    <h5 className='font-semibold my-1'>Our customers</h5>
                    <p className='text-[#363636] font-medium text-base my-4'>
                        FOSEC provides consumers with transparency and trust in the food supply chain. Our cryptographic seals let you trace the journey of your food, ensuring it’s safe, sustainable, and ethically sourced. Every purchase you make supports farmers who are committed to sustainable agriculture.
                    </p>
                    <p className='text-[#363636] font-medium text-base my-4'>
                        By choosing FOSEC, you’re not just getting quality food—you’re helping build a more transparent and secure food system. Your choices directly benefit farmers and contribute to creating a sustainable future for agriculture and food security.
                    </p>
                </div>
            </div>

            {/* Transportation Section */}
            <div className='flex flex-col md:flex-row border-[#E9E9E9] border-2 justify-between my-4  '>
                <img src={transportation} alt="We transport your goods" className='object-cover w-full md:w-1/4 h-auto' />
                <div className='w-full md:w-[65%] my-2 mx-5'>
                    <h5 className='font-semibold my-1'>Transportation</h5>
                    <h5 className='font-semibold my-2'>Linking lives, connecting destinations</h5>
                    <p className='text-[#363636] font-medium text-base my-4'>
                        FOSEC provides consumers with transparency and trust in the food supply chain. Our cryptographic seals let you trace the journey of your food, ensuring it’s safe, sustainable, and ethically sourced. Every purchase you make supports farmers who are committed to sustainable agriculture.
                    </p>
                    <p className='text-[#363636] font-medium text-base my-4'>
                        By choosing FOSEC, you’re not just getting quality food—you’re helping build a more transparent and secure food system. Your choices directly benefit farmers and contribute to creating a sustainable future for agriculture and food security.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
