import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col p-6 text-white bg-gradient-to-br from-[#043400] to-[#111111]'>
            <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                <div className='mb-4 md:mb-0 md:w-2/5'>
                    <h1 className='text-2xl font-bold'>Fosec</h1>
                    <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores dolorum accusamus modi, culpa soluta. Atque dignissimos ea, non maxime explicabo corrupti modi error illum, ducimus distinctio illo laudantium voluptas.</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-semibold mb-2'>Feedback</h2>
                    <form className='flex flex-col space-y-2'>
                        <input type='email' placeholder='Enter your email address' className='p-2 rounded-md border' />
                        <textarea placeholder='Enter your message' className='p-2 rounded-md border h-24 resize-none'></textarea>
                        <button type='submit' className='px-4 py-2 bg-green-600 text-white rounded-md'>Send</button>
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
                    <h2 className='font-semibold mb-2'>Product</h2>
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
