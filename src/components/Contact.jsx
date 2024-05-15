import React from 'react';
import image from '../assets/farm_girl.svg';

const Contact = () => {

    return(
        <div className='flex flex-col items-center justify-center mt-7 m-3 p-2'>
            <h1 className='text-xl font-semibold'>Contact <span className='text-[#1A8500]'>Us</span></h1>
            <div className='flex justify-between w-full px-2'>
                <form action="" className='w-1/2 px-5'>
                    <div className='my-5'>
                    <label htmlFor="name">Name</label>
                    <input className='block border-2 border-[#949494] rounded-md h-10 px-3 py-5 m-2' type="text" placeholder='John Doe' />
                    </div>
                    <div className='my-5'>
                    <label htmlFor="email">Email</label>
                    <input className='block border-2 border-[#949494] rounded-md h-10 px-3 py-5 m-2' type="email" placeholder='example@gmail.com' />
                    </div>
                    <div className='my-5'>
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" placeholder='Your message' cols={30} className='block border-2 border-[#949494] rounded-md px-2 m-2 resize-none'></textarea>
                    </div>
                </form>
                <img src={image} alt="Feel free to contact us" className='w-1/3'/>
            </div>
        </div>
    );
}

export default Contact;