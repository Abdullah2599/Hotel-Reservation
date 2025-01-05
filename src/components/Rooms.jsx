import React from 'react'
import { roomData } from '../../data'
import Room from './Room'

function Rooms() {
  return (
    <section className='py-24'>
      <div className='container mx-auto lg:px-0'>
        <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
            {roomData.map((room) => {
                return <Room key={room.id} room={room} />;
            })}
        </div>
      </div>
    </section>
  )
}

export default Rooms
