import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
   <div
  className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
  style={{ backgroundImage: "url('/header_img.png')" }}
  id="header"
>
  <Nav />


  <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
    <h2>Explpre Your Dream House</h2>
    <div className='flex flex-col gap-1'>
      <a href="#" >Examples</a>
      <a href="#" >Deal With Us</a>

    </div>
  </div>

</div>

  )
}

export default Header