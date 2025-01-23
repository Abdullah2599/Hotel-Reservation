import React, { useContext, useEffect, useState } from 'react'
import { roomData } from '../../data'
import Room from './Room'
import { apiService } from '../services/Apiservice';
import { useAppContext } from '../App';

function Rooms() {
  const { data } = useAppContext();
  console.log(data);
  return (
    <section className='py-24'>
      <div className='container mx-auto lg:px-0'>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 font-primary">Our Rooms</h2>
        <p className="text-gray-600 mt-2 font-tertiary">
          Discover the unique rooms we offer for your convenience.
        </p>
      </div>
        <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
            {data.roomdata.map((room) => {
                return <Room key={room.id} room={room} />;
            })}
        </div>
      </div>
    </section>
  )
}

export default Rooms
