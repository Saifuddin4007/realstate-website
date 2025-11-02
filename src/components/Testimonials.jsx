import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x: 200}}
    transition= {{duration: 1}}
    whileInView= {{opacity: 1, x:0}}
    viewPort= {{once: true}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories From those Who Found Their Dreams into Realities</p>



        <div className='flex flex-wrap justify-center items-center gap-8'>
            {testimonialsData.map((data, ind)=>(
                <div key={ind} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center '>
                    <img src={data.image} alt="testimonials" className='w-20 h-20 rounded-full mx-auto mb-4' />
                    <h2 className='text-2xl text-gray-900 font-medium'>{data.name}</h2>
                    <p className='text-gray-900 mb-5 font-medium text-sm'>{data.title}</p>
                    <div className='flex justify-center gap-1 text-red-600 mb-4'>
                        {Array.from({length: data.rating}, (item,ind)=>(
                            <img key={ind} src={assets.star_icon} />
                        ))}
                    </div>
                    <p className='text-gray-700 '>{data.text}</p>

                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials