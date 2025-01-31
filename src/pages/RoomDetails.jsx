import React, { Suspense, useEffect, useRef, useState } from 'react'
import { FaCheck, FaCoffee, FaBed, FaBath, FaWifi } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { startOfDay } from 'date-fns';
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import AdultDropdown from '../components/AdultDropdown'
import KidsDropdown from '../components/KidsDropdown'
import { useFormik } from 'formik';
import { apiService } from '../services/Apiservice';
import { toast } from 'react-toastify';
import { BsFillLockFill, BsFillPersonFill, BsFillTvFill, BsWifi } from 'react-icons/bs';
function RoomDetails() {
  const baseURL = import.meta.env.VITE_API_IMAGE
  const cleanedBaseURL = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;
  const { id } = useParams();
  const router = useNavigate();
  //console.log(id);
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState();
  const [services, setServices] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const iconMap = {
    FaCheck: FaCheck,
    FaCoffee: FaCoffee,
    FaBed: FaBed,
    FaBath: FaBath,
    FaWifi: FaWifi,
    
  };

  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);
      // const room = roomData.find((room) => room.id === Number(id));
      // setRoom(room);
      try {
        const response = await apiService.getData(`room/record/${id}`);
        const anotherresponse = await apiService.getData(`a_service/list`);
        console.log(anotherresponse);
        setServices(anotherresponse.data);
        setRoom(response.roomdata); // Set the room data
      } catch (error) {
        console.error('Error fetching room data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [id]);

  const [selectedServices, setSelectedServices] = useState([]);

  const handleCheckboxChange = (id, name, price) => {
    setSelectedServices((prevSelected) => {
      let newSelectedServices;
      console.log(id);
      if (prevSelected.some(service => service.id === id)) {
        // Deselecting the service
        newSelectedServices = prevSelected.filter(service => service.id !== id);
      } else {
        // Selecting the service
        newSelectedServices = [...prevSelected, { id, name, price }];
      }
      // Save the selected services to localStorage
      // localStorage.setItem('selectedServices', JSON.stringify(newSelectedServices));
      return newSelectedServices;
    });
  };



  //datefilter api call
  const formik = useFormik({
    initialValues: {
      checkInDate: new Date(),
      checkOutDate: null,
      adults: 1,
      kids: ''
    },
    validationSchema: Yup.object({
      checkInDate: Yup.date()
        .required('Check-in date is required')
        .min(startOfDay(new Date()), 'Check-in date must be today or in the future'),
      checkOutDate: Yup.date()
        .min(Yup.ref('checkInDate'), 'Check-out date must be later than check-in date')
        .required('Check-out date is required'),
      adults: Yup.number().min(1, 'At least 1 adult is required').required('Adults are required'),
      kids: Yup.number().min(0, 'Invalid number of kids').optional()
    }),
    onSubmit: async (values) => {
      if (loading) return;
      const { checkInDate, checkOutDate, adults, kids } = values;
      const person = adults + kids;

      const valid_from = new Date(checkInDate).toISOString();
      const valid_to = new Date(checkOutDate).toISOString();
      console.log(room);
      const personInt = parseInt(person, 10);

      const bookingData = { valid_from, valid_to, person: personInt, roomid: room.id, room: room, services: selectedServices };
      console.log(bookingData);
      try {
        // return if user is not logged in
        if (!localStorage.getItem('token')) {
          toast.error('Please login to book a room');
          router('/login');
          return;
        }
        setLoading(true);
        const response = await apiService.postData(`booking/datefilter`, bookingData);
        if (response.message === 'room available') {
          console.log('Room available');
          localStorage.setItem('bookingData', JSON.stringify(bookingData));
          router('/checkout');
        }
        // setRooms(response);
        // localStorage.setItem('rooms', JSON.stringify(response));
        //console.log('Updated rooms:', );
        console.log(response);
        // formik.resetForm();
        //router('/rooms');
      } catch (error) {
        console.error('Error fetching room data:', error);
      } finally {
        setLoading(false);
      }
    }
  });


  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
  );

  if (!room) {
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



  const { roomfacility } = room;
  console.log(roomfacility);
  return (
    <section>
      <div className="bg-cover bg-center h-[560px] relative flex justify-center items-center" style={{ backgroundImage: `url(${baseURL + room.imagelg})` }}>
        <div className='absolute top-0 w-full h-full bg-black/70'></div>
        <h1 className='text-6xl text-white z-20 font-primary text-center'>
          {room.roomTitle}
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row py-24'>
          <div className='w-full h-full lg:w-[60%] px-6'>
            <h2 className='text-[30px] font-tertiary'>Room Details</h2>
            <h3 className="font-tertiary text-black text-lg font-semibold">Price Per Day:</h3>
            <span className="text-red-500 font-bold font-tertiary text-2xl">${room.price}</span>
            <h3 className='text-lg font-semibold font-tertiary'>Room Type</h3>
            <p className='font-tertiary uppercase'>{room.roomType}</p>
            <h3 className='text-lg font-semibold'>Max Guests</h3>
            <p className='font-tertiary'>{room.person}</p>
            <hr className='my-2' />
            <h3 className='text-lg font-semibold'>Room Description</h3>
            <p className='mb-8 font-tertiary'>{room.description}</p>
            <img className='mb-8 shadow-xl' src={`${baseURL + room.image}`} />
            {roomfacility && roomfacility.length ? <div className='mt-12'>
              <h3 className='h3 mb-3'>Room Facilities</h3>
              <p className='mb-12'>lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos quae iste.</p>
              <div>
                <div className='grid grid-cols-3 gap-6 mb-12'>
                  {roomfacility.map((item, index) => {
                    const { icon, name } = item.facility;
                    const IconComponent = iconMap[icon];

                    return (
                      <div key={index} className='flex items-center gap-x-3 flex-1'>
                        <div className='text-accent text-3xl'>
                          {IconComponent ? <IconComponent /> : null}
                        </div>
                        <div className='text-base'>
                          {name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div> : null}
            <div className='flex flex-col gap-y-4'>
              <h3 className='h3 mb-3'>Exclusive Room Amenities</h3>
              <p className='mb-12'>
                Our rooms are equipped with a range of luxurious amenities to ensure you have a comfortable and memorable stay. Enjoy the convenience and relaxation our services provide, designed to cater to your every need.
              </p>
              <div className='grid grid-cols-2 gap-6'>
                <div className='flex items-center gap-x-3 flex-1'>
                  <div className='text-accent text-3xl'>
                    <BsWifi />
                  </div>
                  <div className='text-base'>
                    High-Speed Wifi – Stay connected with fast, free internet throughout your stay.
                  </div>
                </div>
                <div className='flex items-center gap-x-3 flex-1'>
                  <div className='text-accent text-3xl'>
                    <BsFillLockFill />
                  </div>
                  <div className='text-base'>
                    Secure Keyless Entry – Access your room with ease and peace of mind.
                  </div>
                </div>
                <div className='flex items-center gap-x-3 flex-1'>
                  <div className='text-accent text-3xl'>
                    <BsFillTvFill />
                  </div>
                  <div className='text-base'>
                    Smart TV – Enjoy a range of entertainment options at your fingertips.
                  </div>
                </div>
                <div className='flex items-center gap-x-3 flex-1'>
                  <div className='text-accent text-3xl'>
                    <BsFillPersonFill />
                  </div>
                  <div className='text-base'>
                    Premium Service – Our attentive staff is available for all your requests.
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='w-full h-full lg:w-[40%] px-6'>
            <form onSubmit={formik.handleSubmit}>
              <div className='py-8 px-6 bg-accent/20 mb-12'>
                <div className='flex flex-col space-y-8 mb-4'>
                  <h3 className='h3 mb-3'>Your Reservation</h3>
                  <div className='h-[60px]'>
                    <CheckIn startDate={formik.values.checkInDate}
                      setStartDate={(date) => formik.setFieldValue('checkInDate', date)} />
                    {formik.touched.checkInDate && formik.errors.checkInDate ? (
                      <div className="text-red-500">{formik.errors.checkInDate}</div>
                    ) : null}
                  </div>
                  <div className='h-[60px]'>
                    <CheckOut endDate={formik.values.checkOutDate}
                      setEndDate={(date) => formik.setFieldValue('checkOutDate', date)} />
                    {formik.touched.checkOutDate && formik.errors.checkOutDate ? (
                      <div className="text-red-500">{formik.errors.checkOutDate}</div>
                    ) : null}
                  </div>
                  <div className='h-[60px]'>
                    <AdultDropdown value={formik.values.adults}
                      setValue={(value) => formik.setFieldValue('adults', value)} />
                    {formik.touched.adults && formik.errors.adults ? (
                      <div className="text-red-500">{formik.errors.adults}</div>
                    ) : null}
                  </div>
                  <div className='h-[60px]'>
                    <KidsDropdown value={formik.values.kids}
                      setValue={(value) => formik.setFieldValue('kids', value)} />
                    {formik.touched.kids && formik.errors.kids ? (
                      <div className="text-red-500">{formik.errors.kids}</div>
                    ) : null}
                  </div>
                  <div className='flex-1'>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        className="w-full px-8 py-2 bg-white flex justify-between items-center h-14"
                      >
                        Additional Services
                        <span className="ml-2">{selectedServices.length} selected</span>
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute top-12 left-0 w-full bg-white shadow-lg z-10 max-h-60 overflow-auto">
                          {services.map((item) => (
                            <label key={item._id} className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 cursor-pointer justify-between">
                              <input
                                type="checkbox"
                                checked={selectedServices.some(service => service.id === item._id)}
                                onChange={() => handleCheckboxChange(item._id, item.name, item.price)}
                                className="form-checkbox h-4 w-4 text-accent-hover"
                              />
                              <span>{item.name} - ${item.price}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {formik.touched.additionalServices && formik.errors.additionalServices && (
                      <div className="text-red-500">{formik.errors.additionalServices}</div>
                    )}
                  </div>

                </div>
                <button type='submit' className='btn btn-primary w-full h-12'>Book Now</button>
              </div>
            </form>

            <div>
              <h3 className='h3 mb-3'>Hotel Rules & Booking Details</h3>
              <p className='mb-6'>
                Please note that your initial booking is considered provisional. Our agents will verify the details and confirm the reservation once all necessary checks have been completed. We aim to provide you with the best possible service and appreciate your understanding.
              </p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Additional Services: The service fee applies only once during your stay and is not charged daily.
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Provisional Booking: Your reservation will be confirmed once our team verifies the booking details.
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Payment: Full payment is required at the time of check-in to proceed with verification.
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Additional Information: Please ensure that you provide accurate information to avoid delays in the confirmation process.
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
