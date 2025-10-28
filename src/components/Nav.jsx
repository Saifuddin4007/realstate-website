import React from 'react';
import { assets } from '../assets/assets';

const Nav = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10 bg-blue-500 '>
        <div className='flex justify-between mx-7 p-5'>
            <img src={assets.logo} alt="logo" />
            <ul className='hidden md:flex justify-center items-center gap-5'>
                <li><a href="#" className='cursor-pointer text-white hover:text-blue-300' >Home</a></li>
                <li><a href="#" className='cursor-pointer text-white hover:text-blue-300' >About</a></li>
                <li><a href="#" className='cursor-pointer text-white hover:text-blue-300' >Projects</a></li>
                <li><a href="#" className='cursor-pointer text-white hover:text-blue-300' >Testimonials</a></li>

            </ul>
            <button className='hidden md:block border-0 rounded-xl p-3 bg-blue-800 text-white text-[15px] font-semibold '>Sign Up</button>
        </div>

    </div>
  ) 
}

export default Nav