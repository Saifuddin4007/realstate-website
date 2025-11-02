import React from 'react'
import Nav from './Nav'
import { motion } from "framer-motion"

const Header = () => {
  return (
   <div
  className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
  style={{ backgroundImage: "url('/header_img.png')" }}
  id="home"
>
  <Nav />


  <motion.div 
  initial={{opacity: 0, y: 100}}
  transition= {{duration: 1.5}}
  whileInView= {{opacity: 1, y:0}}
  viewPort= {{once: true}}
  className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
    <h2 className='text-5xl sm:text-6xl md:text-[90px] inline-block mx-w-3xl font-semibold pt-10'>Explpre Your Dream House</h2>
    <div className='flex flex-col gap-y-0.5 md:flex-row justify-center items-center gap-10'>
      <a href="#example" className='border-2 border-white bg-blue-300 p-2.5 m-2 rounded-xl'>Examples</a>
      <a href="#deal" className='border-2 border-white bg-amber-300 p-2 m-2 rounded-xl' >Deal With Us</a>

    </div>
  </motion.div>

</div>

  )
}

export default Header