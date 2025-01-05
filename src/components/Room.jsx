import React from 'react'
import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Room({room}) {
  return (
    <div className='bg-white shadow-2xl min-h-[500px] group '>
      <div className='overflow-hidden'>
      <img className='group-hover:scale-110 transition-all duration-300 w-full' src={room.image} alt="room" />

      </div>
      {/* DETAILS */}
      <div className='bg-white shadow-lg max-w-[300] mx-7 h-[60px] -translate-y-1/2 flex 
      justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base '>
        <div className='flex justify-between w-[80%]'>
          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              <BsArrowsFullscreen className='text-[15px]' />
            </div>
            <div className='flex gap-x-1'>
            <div className='ml-2'>Size</div>
            <div className='ml-2'>{room.size}</div>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              <BsPeople className='text-[15px]' />
            </div>
            <div className='flex gap-x-1'>
            <div className='ml-2'>Max People</div>
            <div className='ml-2'>{room.maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <Link to={`/room/${room.id}`}>
          <h3 className='h3'>{room.name}</h3>
        </Link>
        <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{room.description.slice(0, 56)}</p>
      </div>
      <Link to={`/room/${room.id}`} className='btn btn-secondary btn-sm max-w-[240px] mx-auto'>Book now from ${room.price}</Link>
    </div>
  )
}

export default Room
