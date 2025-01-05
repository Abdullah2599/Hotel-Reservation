import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const lis = [
  {name: '1 Adult'},
  {name: '2 Adults'},
  {name: '3 Adults'},
  {name: '4 Adults'},
]

function AdultDropdown() {
  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
   <MenuButton className='w-full h-full flex items-center '> 
    Adults
    <BsChevronDown/>
   </MenuButton>
   <MenuItems as='ul'>
   {
    lis.map((li, index) => {
          return(

     <MenuItem as='li' key={index}>
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
