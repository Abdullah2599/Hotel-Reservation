import React, { useEffect, useState } from 'react'
// import { roomData } from '../../data'
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { startOfDay } from 'date-fns';
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import AdultDropdown from '../components/AdultDropdown'
import KidsDropdown from '../components/KidsDropdown'
import { FaCheck } from 'react-icons/fa';
import { useFormik } from 'formik';
import { apiService } from '../services/Apiservice';
function RoomDetails() {
  const baseURL = import.meta.env.VITE_API_IMAGE
  const cleanedBaseURL = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;
  const { id } = useParams();
  const router = useNavigate();
  //console.log(id);
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState('');
  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);
      // const room = roomData.find((room) => room.id === Number(id));
      // setRoom(room);
      try {
        const response = await apiService.getData(`room/record/${id}`);
        setRoom(response.roomdata); // Set the room data
      } catch (error) {
        console.error('Error fetching room data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

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
      const bookingData = { valid_from, valid_to, person, room: room.id };
      console.log(bookingData);
      try {
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



  const { facilities } = room;
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
            <h2 className='h2'>Room Details</h2>
            <p className='mb-8'>{room.description}</p>
            <img className='mb-8 shadow-xl' src={`${baseURL + room.image}`} />
            <div className='mt-12'>
              <div className="mt-2 mb-4 text-gray-700">
                <span className="font-semibold font-primary h3 text-black text-2xl">Price per day:</span>
                <span className="text-red-500 font-bold font-primary text-3xl pl-2">${room.price}</span>
              </div>

              <h3 className='h3 mb-3'>Room Facilities</h3>
              <p className='mb-12'>lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos quae iste.</p>
              <div>
                <div className='grid grid-cols-3 gap-6 mb-12'>
                  {/* {facilities.map((item, index) => {
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
                      })} */}
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full lg:w-[40%] px-6'>
            <form onSubmit={formik.handleSubmit}>
              <div className='py-8 px-6 bg-accent/20 mb-12'>
                <div className='flex flex-col space-y-4 mb-4'>
                  <h3 className='h3 mb-3'>Your Reservation</h3>
                  <div className='h-[60px]'>
                    <CheckIn startDate={formik.values.checkInDate}
                      setStartDate={(date) => formik.setFieldValue('checkInDate', date)} />
                    {/* <div>Price Per Day:{room.price}</div> */}
                  </div>
                  <div className='h-[60px]'>
                    <CheckOut endDate={formik.values.checkOutDate}
                      setEndDate={(date) => formik.setFieldValue('checkOutDate', date)} />
                    {/* <div>Selected Check In Date: 1/25/25</div> */}
                  </div>
                  <div className='h-[60px]'>
                    <AdultDropdown value={formik.values.adults}
                      setValue={(value) => formik.setFieldValue('adults', value)} />
                    {/* <div>Selected Check Out Date: 1/28/25</div> */}
                  </div>
                  <div className='h-[60px]'>
                    <KidsDropdown value={formik.values.kids}
                      setValue={(value) => formik.setFieldValue('kids', value)} />

                  </div>
                  <button type='submit' className='btn btn-primary btn-lg w-full'>Book Now</button>
                </div>
              </div>
            </form>

            <div>
              <h3 className='h3 mb-3'>Hotel Rules</h3>
              <p className='mb-6'>lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos quae iste.</p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-in: 10:00PM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-out: 3:00 PM - 9:00PM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-in: 3:00 PM - 9:00PM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
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
