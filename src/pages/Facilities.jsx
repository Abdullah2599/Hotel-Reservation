export default function Facilities() {
  return (

    <div className="bg-black"><hr /><h1 className=" h-[260px] text-accent font-tertiary mt-12 pt-10 pb-10 animate-fadeInUp mt-28 mb-5 text-6xl uppercase text-center">
      FACILITIES WE OFFER 
    </h1><hr />
      <div className="flex flex-wrap justify-evenly items-center bg-white py-5 pb-12 pt-12">
        <div className="pl-4 sm:w-1/3">
          <img   src="/assets/img/laundry.jpg" alt="laundry" className="w-max animate-fadeInLeft shadow-xl hover:scale-110 transition-all duration-300" />
        </div>


        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 animate-fadeInRight pt-5">
          <h2 className="text-accent font-tertiary text-5xl px-7">LAUNDRY SERVICES</h2>
          <p className="pt-5 px-8 text-gray-600 leading-7 text-justify">
          Our hotel offers efficient and reliable laundry services to ensure your clothing is fresh and ready for any occasion. Whether it's daily wear, business attire, or special garments, we provide professional care and prompt delivery for your convenience.
          </p>
        </div>
      </div>

      <div className=" flex flex-wrap justify-evenly items-center bg-accent py-5 pb-12 pt-12">
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 animate-fadeInRight pt-5">
          <h2 className="text-white text-5xl px-7 mt-0 font-tertiary">DOOR STEP FOOD DELIVERY</h2>
          <p className="pt-5 px-8 leading-7 text-slate-200 text-justify">
          Enjoy the comfort of delicious meals delivered right to your doorstep. Our doorstep food delivery service ensures you savor freshly prepared dishes from our kitchen, offering a variety of cuisines to delight your taste buds, all without leaving your room.
          </p>
        </div>

        <div className="pl-4 sm:w-1/3">
          <img src="/assets/img/food.jpg" alt="food" className="w-max animate-fadeInLeft shadow-xl hover:scale-110 transition-all duration-300" />
        </div>
      </div><div className="flex flex-wrap justify-evenly  items-center bg-white py-5 pb-12 pt-12">
        <div className="pl-4 sm:w-1/3">
          <img src="/assets/img/roomservice.jpg" alt="roomservice" className="w-max animate-fadeInLeft shadow-xl hover:scale-110 transition-all duration-300" />
        </div>

        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 animate-fadeInRight pt-5">
          <h2 className="text-accent font-tertiary text-5xl px-7 mt-0">HOUSE KEEPING</h2>
          <p className="pt-5 px-8 leading-7 text-gray-600 text-justify">
          Our dedicated housekeeping team ensures your room stays spotless and welcoming throughout your stay. From daily cleaning to personalized arrangements, we prioritize your comfort and maintain the highest standards of hygiene and care.
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-evenly items-center bg-accent py-5 pb-12 pt-12">
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 animate-fadeInRight pt-5">
          <h2 className="text-5xl px-8 mt-0 text-white font-tertiary">SHUTTLE SERVICE</h2>
          <p className="pt-5 px-9 leading-7 text-gray-100 text-justify">
          Our shuttle service provides convenient and reliable transportation to and from key destinations. Whether you're heading to the airport, exploring local attractions, or attending events, we ensure a comfortable and stress-free journey.
          </p>
        </div>


        <div className="pl-4 sm:w-1/3">
          <img src="assets/img/shuttle.jpg" alt="shuttle" className="w-max animate-fadeInLeft shadow-xl hover:scale-110 transition-all duration-300" />
        </div>
      </div><div className="flex flex-wrap justify-evenly items-center bg-white py-5 pb-12 pt-12">
        <div className="pl-4 sm:w-1/3">
          <img src="assets/img/buffet.jpg" alt="buffet" className="w-max animate-fadeInLeft shadow-xl hover:scale-110 transition-all duration-300" />
        </div>
        
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 animate-fadeInRight pt-5">
          <h2 className="text-black font-tertiary text-5xl px-7 mt-0">BUFFET SERVICE</h2>
          <p className="pt-5 px-9 leading-7 text-gray-600 text-justify">
          Indulge in a delightful culinary experience with our buffet service, offering a wide array of dishes to suit every palate. From local specialties to international cuisines, enjoy unlimited choices in a vibrant and welcoming setting.
          </p>
        </div>
      </div></div>

  )
}
