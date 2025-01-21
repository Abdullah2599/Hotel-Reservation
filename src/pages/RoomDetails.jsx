import React, { useEffect, useState } from 'react'
import { roomData } from '../../data'
import { useParams } from 'react-router-dom';
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import AdultDropdown from '../components/AdultDropdown'
import KidsDropdown from '../components/KidsDropdown'
import { FaCheck } from 'react-icons/fa';
function RoomDetails() {
  const {id} = useParams();
  console.log(id);
  const [room,setRoom]=useState();
  
  useEffect(()=>{
    const room = roomData.find((room) => room.id === Number(id));
    setRoom(room);
    console.log(room);
    window.scrollTo(0, 0);
  },[])

  if(!room) {
    return (
      <section>
        <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
          <div className='absolute top-0 w-full h-full bg-black/70'></div>
          <h1 className='text-6xl text-white z-20 font-primary text-center'>
              Room Not Found
          </h1>
        </div>
      </section>
    )
  }
  const { facilities} = room;
  return (
    <section>
     <div className="bg-cover bg-center h-[560px] relative flex justify-center items-center" style={{ backgroundImage: `url(${room.imageLg})` }}>
        <div className='absolute top-0 w-full h-full bg-black/70'></div>
        <h1 className='text-6xl text-white z-20 font-primary text-center'>
            {room.name}
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row py-24'>
            <div className='w-full h-full lg:w-[60%] px-6'>
                <h2 className='h2'>Room Details</h2>
                <p className='mb-8'>{room.description}</p>
               <img className='mb-8 shadow-xl' src={room.imageLg}/>
               <div className='mt-12'>
                  <h3 className='h3 mb-3'>Room Facilities</h3>
                  <p className='mb-12'>lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos quae iste.</p>
                  <div>
                    <div className='grid grid-cols-3 gap-6 mb-12'>
                    {facilities.map((item, index) => {
                        const {icon, name} = item;
                      return (
                      <div key={index} className='flex items-center gap-x-3 flex-1'>
                        <div className='text-accent text-3xl'>
                          <item.icon/>
                        </div>
                        <div className='text-base'>
                          {name}
                        </div>
                      </div>);
                      })}
                      </div>
                  </div>
               </div>
            </div>
            <div className='w-full h-full lg:w-[40%] px-6'>
               <div className='py-8 px-6 bg-accent/20 mb-12'>
                <div className='flex flex-col space-y-4 mb-4'>
                  <h3 className='h3 mb-3'>Your Reservation</h3>
                  <div className='h-[60px]'>
                    <CheckIn />
                  </div>
                  <div className='h-[60px]'>
                    <CheckOut />
                  </div>
                  <div className='h-[60px]'>
                    <AdultDropdown />
                  </div>
                  <div className='h-[60px]'>
                    <KidsDropdown />
                  </div>
                </div>
                  <button className='btn btn-primary btn-lg w-full'>Book Now</button>
 
               </div>
               <div>
                <h3 className='h3 mb-3'>Hotel Rules</h3>
                <p className='mb-6'>lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos quae iste.</p>
               <ul className='flex flex-col gap-y-4'>
                 <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent'/>
                    Check-in: 10:00PM
                 </li>
                 <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent'/>
                    Check-out: 3:00 PM - 9:00PM
                 </li>
                 <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent'/>
                    Check-in: 3:00 PM - 9:00PM
                 </li>
                 <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent'/>
                    Check-in: 3:00 PM - 9:00PM
                 </li>
               </ul>
               </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default RoomDetails
