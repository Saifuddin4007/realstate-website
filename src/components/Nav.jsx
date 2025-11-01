import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const [menuBar, setMenuBar] = useState(false);

  useEffect(()=>{
    if(menuBar){
      document.body.style.overflow= "hidden";
    }
    else{
      document.body.style.overflow= "auto";
    }
    
  },[menuBar] )
  return (
    <div className='absolute top-0 left-0 w-full z-10 bg-blue-500 '>
        <div className='flex justify-between mx-7 p-5'>
            <img src={assets.logo} alt="logo" />
            <ul className='hidden md:flex justify-center items-center gap-5'>
                <li><a href="#home" className='cursor-pointer text-white hover:text-blue-300' >Home</a></li>
                <li><a href="#about" className='cursor-pointer text-white hover:text-blue-300' >About</a></li>
                <li><a href="#projects" className='cursor-pointer text-white hover:text-blue-300' >Projects</a></li>
                <li><a href="#testimonials" className='cursor-pointer text-white hover:text-blue-300' >Testimonials</a></li>

            </ul>
            <button className='hidden md:block border-0 rounded-xl p-3 bg-blue-800 text-white text-[15px] font-semibold mt-3.5 cursor-pointer'>Sign Up</button>

            <img src={assets.menu_icon} alt="menu-icon" className='md:hidden w-8 p-1 m-1.5 cursor-pointer ml-auto' onClick={()=>setMenuBar(true)} /> {/*MENU-ICONS*/}


            {/* {menu bar for small devices} */}
            <div className={`md:hidden ${menuBar?'fixed w-[50%] right-0 top-0 bottom-0 transition-all': 'w-0 h-0'} overflow-hidden bg-blue-300 `}>

            
              <div className='flex justify-end p-2 m-3 cursor-pointer'>
                <RxCross2 className='text-3xl ' onClick={()=>setMenuBar(false)} /> {/*//CROSS-ICON*/}
              </div>

              <ul className='flex flex-col items-center mb-15 p-1.5 gap-6   transition-all'>
                <li className='p-2 mt-3 rounded-2xl border-2 w-full inline-block text-center bg-blue-600 cursor-pointer' onClick={()=>setMenuBar(false)}><a href="#home" >Home</a></li>
                <li className='p-2 m-1.5 rounded-2xl border-2 w-full inline-block text-center bg-blue-600 cursor-pointer' onClick={()=>setMenuBar(false)}><a href="#about">About</a></li>
                <li className='p-2 m-1.5 rounded-2xl border-2 w-full inline-block text-center bg-blue-600 cursor-pointer' onClick={()=>setMenuBar(false)}><a href="#projects" >Projects</a></li>
                <li className='p-2 m-1.5 rounded-2xl border-2 w-full inline-block     text-center bg-blue-600 cursor-pointer' onClick={()=>setMenuBar(false)}><a href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
        </div>

    </div>
  ) 
}

export default Nav