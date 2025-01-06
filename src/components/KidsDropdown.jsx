import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

const lis = [
  {name: '0 Kids'},
  {name: '1 Kid'},
  {name: '2 Kids'},
  {name: '3 Kids'},
]

function KidsDropdown() {
  const [kids, setKids] = useState('0 Kids')
  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
   <MenuButton className='w-full h-full flex items-center justify-between px-8'> 
    {kids === '0 Kids' ? 'No Kids' : kids}
    <BsChevronDown className='text-base text-accent-hover'/>
   </MenuButton>
   <MenuItems as='ul'>
   {
    lis.map((li, index) => {
          return(

     <MenuItem as='li' className='border-b last-of-type:border-b-0 h-12 bg-white 
     hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer' 
     key={index}
     onClick={() => setKids(li.name)} 
     >
       {li.name}
      </MenuItem> 
          )
    })
   }
   </MenuItems>
   </Menu>
  )
}

export default KidsDropdown
