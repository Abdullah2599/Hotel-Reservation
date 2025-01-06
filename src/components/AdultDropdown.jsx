import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

const lis = [
  {name: '1 Adult'},
  {name: '2 Adults'},
  {name: '3 Adults'},
  {name: '4 Adults'},
]

function AdultDropdown() {
  const [adults, setAdults] = useState('1 Adult')
  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
   <MenuButton className='w-full h-full flex items-center justify-between px-8'> 
    {adults}
    <BsChevronDown className='text-base text-accent-hover'/>
   </MenuButton>
   <MenuItems as='ul'>
   {
    lis.map((li, index) => {
          return(

     <MenuItem as='li' className='border-b last-of-type:border-b-0 h-12 bg-white
      hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer' 
      onClick={() => setAdults(li.name)} key={index}>
       {li.name}
      </MenuItem> 
          )
    })
   }
   </MenuItems>
   </Menu>
  )
}

export default AdultDropdown
