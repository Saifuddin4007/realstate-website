import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x: 200}}
    transition= {{duration: 1}}
    whileInView= {{opacity: 1, x:0}}
    viewPort= {{once: true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-33 w-full overflow-hidden' id='about'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Business</span></h1>
        <p className='text-gray-500 text-2xl max-w-80 text-center mb-8'>Ready to buy your own House</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="img" className='w-full sm:w-1/2 max-w-lg' />
            <div className='flex flex-col items-center md:items-startmt-10 text-gray-700'>
                <div className='grid grid-cols-2 gap-6 md:gap-12 w-full 2xl:pr-28'>
                    <div className=''>
                        <p className='text-5xl font-light text-gray-800'>15+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div className=''>
                        <p className='text-5xl font-light text-gray-800'>19+</p>
                        <p>Years of Experience</p>
                    </div>
                    <div className=''>
                        <p className='text-5xl font-light text-gray-800'>25+</p>
                        <p>Mn Sq. Ft. Delivered</p>
                    </div>
                    <div className=''>
                        <p className='text-5xl font-light text-gray-800'>14+</p>
                        <p>Ongoing Projects</p>
                    </div>

                </div>
                <p className='my-10 max-w-lg'>
                    Welcome to BluePeak Real Estate, a trusted name in property solutions where innovation meets integrity. We specialize in providing seamless real estate services, including property buying, selling, renting, and investment consultancy. Our mission is to simplify real estate transactions by offering transparent processes, expert guidance, and customer-centric solutions.
                </p>
                <button className='bg-blue-900 text-white px-3 py-2 m-1 rounded'>
                    More About us
                </button>

            </div>

        </div>

    </motion.div>
  )
}

export default About