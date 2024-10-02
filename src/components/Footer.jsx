import React from 'react';
import logo from '../assets/eco_plant.svg';

const Footer = () => {
    return (
        <div className='flex flex-col p-6 text-white bg-gradient-to-br from-[#043400] to-[#111111]'>
            <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                <div className='mb-4 md:mb-0 md:w-2/5'>
                    <h1 className='text-2xl font-bold flex items-center'><span><img src={logo} alt="Fosec" className='text-white inline mx-1 mb-1'/></span>Fosec</h1>
                    <p className='text-sm mt-2'>We’re committed to empowering farmers, connecting communities, and driving innovation in agriculture. By leveraging technology, we aim to build a more sustainable and efficient future for food production. Together, we’re growing stronger, one harvest at a time.</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-semibold mb-2'>Feedback</h2>
                    <form className='flex flex-col space-y-2'>
                        <input type='email' placeholder='Enter your email address' className='p-2 rounded-md border' />
                        <textarea placeholder='Enter your message' className='p-2 rounded-md border h-24 resize-none'></textarea>
                        <button type='submit' className='px-4 py-2 bg-[#1a8500] text-white rounded-md'>Send</button>
                    </form>
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-semibold mb-2'>Features</h2>
                    <ul className='space-y-1'>
                        <li>Transactions</li>
                        <li>Transport services</li>
                        <li>Communications</li>
                        <li>Notifications</li>
                        <li>Product posting</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-semibold mb-2 md:w-full'>Product</h2>
                    <ul className='space-y-1'>
                        <li>System settings</li>
                        <li>Help center</li>
                        <li>Ask for questions</li>
                        <li>Communications</li>
                        <li>Account management</li>
                    </ul>
                </div>
            </div>
            <div className='mt-6 flex justify-center space-x-4'>
                <a href='#contact' className='text-white'><i className='fab fa-twitter'></i></a>
                <a href='#contact' className='text-white'><i className='fab fa-instagram'></i></a>
                <a href='#contact' className='text-white'><i className='fab fa-facebook'></i></a>
                <a href='#contact' className='text-white'><i className='fab fa-linkedin'></i></a>
            </div>
        </div>
    );
}

export default Footer;
