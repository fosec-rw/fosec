import React from 'react';
import featureImg from '../assets/features_image.png';
import Button from './Button';

const Features = () => {

    return(
        <div className='flex flex-col items-center mt-5 m-2 p-2'>
            <h1 className='text-xl font-semibold'>Our <span className='text-[#1A8500]'>Features</span></h1>
            <div className='flex'>
                <div className='border-2 flex flex-col items-center border-[#E9E9E9] p-2 m-2'>
                    <img src={featureImg} alt="Our Features" />
                    <div className='my-2'>
                    <h1 className='font-semibold text-lg text-[#0F4901] m-2'>AI Generated Tips</h1>
                    <p className='m-2'>We provide all types of crops from different countries and continents including Fruits ,oil crops , sugar sweeteners,vegetables ,wheat, cash crops and more... </p>
                    <p className='m-2'>We get our crops from trusted producers. This crops are tested before being sold to our customers.</p>
                    </div>
                    <Button text="view more"/>
                </div>
                <div className='border-2 flex flex-col items-center border-[#E9E9E9] p-2 m-2'>
                    <img src={featureImg} alt="Our Features" />
                    <div className='my-2'>
                    <h1 className='font-semibold text-lg text-[#0F4901] m-2'>Weather Forecast</h1>
                    <p className='m-2'>We provide all types of crops from different countries and continents including Fruits ,oil crops , sugar sweeteners,vegetables ,wheat, cash crops and more... </p>
                    <p className='m-2'>We get our crops from trusted producers. This crops are tested before being sold to our customers.</p>
                    </div>
                    <Button text="view more"/>
                </div>
                <div className='border-2 flex flex-col items-center border-[#E9E9E9] p-2 m-2'>
                    <img src={featureImg} alt="Our Features" />
                    <div className='my-2'>
                    <h1 className='font-semibold text-lg text-[#0F4901] m-2'>Real time Chats</h1>
                    <p className='m-2'>We provide all types of crops from different countries and continents including Fruits ,oil crops , sugar sweeteners,vegetables ,wheat, cash crops and more... </p>
                    <p className='m-2'>We get our crops from trusted producers. This crops are tested before being sold to our customers.</p>
                    </div>
                    <Button text="view more"/>
                </div>
            </div>
        </div>
    );
}

export default Features;