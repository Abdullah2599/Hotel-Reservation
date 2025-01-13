import React from 'react'
import { roomData } from '../../data'
import { useParams } from 'react-router-dom';
function RoomDetails() {
  const {id} = useParams();
  console.log(id);
  
  
  const room = roomData.find((room) =>{ room.id === Number(id)});
  console.log(room);

  if(!room) {
    return (
      <section className='bg-pink-200'>
        <div className='bg-white bg-cover bg-center h-[560px] relative flex justify-center items-center'>
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
    <section className='bg-pink-200'>
      <div className='bg-rom bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        <div className='absolute top-0 w-full h-full bg-black/70'></div>
        <h1 className='text-6xl text-white z-20 font-primary text-center'>
            Luxury Room Details
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row py-24'>
            <div className='w-full h-full lg:w-[60%] px-6'>
                <h2 className='h2'>Room Details</h2>
                <p className='mb-8'>lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos quae iste.</p>
               <img className='mb-8' src='/assets/img/room-1.jpg'/>
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
                          {icon}
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
               lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos quae iste.
               lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos quae iste.
            </div>
        </div>
      </div>
    </section>
  )
}

export default RoomDetails
