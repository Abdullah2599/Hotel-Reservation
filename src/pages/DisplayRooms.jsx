import React, { useEffect } from 'react';
import Room from '../components/Room';
import { useAppContext } from '../App';

function DRooms() {
  const { data } = useAppContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-black">
        <hr />
        <h1 className="h-[260px] text-accent font-tertiary pt-10 pb-10 animate-fadeInUp mt-28 mb-5 text-6xl uppercase text-center">
          OUR ROOMS
        </h1>
        <hr />
      </div>
      <section className='py-24'>
        <div className="container mx-auto lg:px-0">
          <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
            {data && data.roomdata && data.roomdata.length > 0 ? (
              data.roomdata.map((room) => (
                room ? <Room key={room.id} room={room} /> : null
              ))
            ) : (
              <div className="text-center">No rooms available</div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}

export default DRooms;