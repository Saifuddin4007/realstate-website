import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' flex flex-col justify-between items-center md:flex-row pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
        <div className='flex flex-col container mx-auto md:flex-row justify-between items-center mt-4' >
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="logo" />
                <p className='text-white mt-5'>Welcome to BluePeak Real Estate, a trusted name in property solutions where innovation meets integrity</p>
            </div>
            <div></div>
            <div></div>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
        
        <ul className='flex flex-col gap-2 text-gray-500'>
            <li className='hover:text-blue-300' ><a href="#home">Home</a></li>
            <li className='hover:text-blue-300'><a href="#about">About</a></li>
            <li className='hover:text-blue-300'><a href="#contact">Contact Us</a></li>
            <li className='hover:text-blue-300'><a href="#policy">Our Policy</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Footer