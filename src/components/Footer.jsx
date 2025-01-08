import React from 'react'
import LogoWhite from '/assets/img/logo-light.png'

function Footer() {
  return (
    <><div className='w-full py-16 text-white bg-accent px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want to stay up to date?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full text-black'
              type='email'
              placeholder='Enter Email' />
            <button className='btn btn-secondary hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-white w-[300px] ml-4 my-6 px-6 py-3'>
              Notify
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-primary'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div><footer className='bg-primary py-12'>
        <div className='container mx-auto text-white justify-between sm:flex'>
          <a href="/">
            <img className='w-[160px] h-[60px]' src={LogoWhite} alt="logo" />
          </a>
          <div className='flex gap-x-8'></div>
          <p className='mt-6 sm:mt-0'>Copyright &copy; 2025. All Rights Reserved</p>
        </div>
      </footer></>
  )
}

export default Footer
