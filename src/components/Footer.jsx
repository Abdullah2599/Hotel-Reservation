import React from 'react'
import LogoWhite from '/assets/img/logo-white.svg'

function Footer() {
  return (
    <footer className='bg-primary py-12'>
   <div className='container mx-auto text-white justify-between sm:flex'>
     <a href="/">
       <img src={LogoWhite} alt="logo" />
     </a>
     <div className='flex gap-x-8'></div>
     <p className='mt-6 sm:mt-0'>Copyright &copy; 2025. All Rights Reserved</p>
   </div>
    </footer>
  )
}

export default Footer
