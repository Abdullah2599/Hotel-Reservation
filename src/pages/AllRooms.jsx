import React from 'react';
import Rooms from '../components/Rooms';

function AllRooms() {
  return (
    // <div className="bg-black text-white text-center pt-10 pb-10">
    //   <div className="max-w-screen-xl mx-auto">
    //     <hr />
    //     <h1 className="text-accent font-tertiary pt-10 pb-10 animate-fadeInUp mt-28 mb-5 text-6xl uppercase">
    //       OUR ROOMS
    //     </h1>
    //     <hr />
    //      { Rooms() }
    //   </div>
    // </div>
    <div>
      {/* Black background for header section */}
      <div className="bg-black">
        <hr />
        <h1 className="h-[260px] text-accent font-tertiary mt-12 pt-10 pb-10 animate-fadeInUp mt-28 mb-5 text-6xl uppercase text-center">
          OUR ROOMS
        </h1>
        <hr />
      </div>

      {/* White background for room content */}
      <div className="flex flex-wrap justify-evenly items-center bg-white py-5 pb-12 pt-12">
        <Rooms />
      </div>

      {/* You can add more rooms in a similar structure */}
    </div>
  );
}

export default AllRooms;