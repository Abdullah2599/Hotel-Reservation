import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { apiService } from '../services/Apiservice';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  // State management
  const [bookingData, setBookingData] = useState({});
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [numDays, setNumDays] = useState(0);
  const router = useNavigate();



  useEffect(() => {
    const bookingDataFromStorage = localStorage.getItem('bookingData');
    const userFromToken = localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null;

    if (userFromToken) {
      setUser(userFromToken);
      console.log(userFromToken);
    }

    if (bookingDataFromStorage) {
      const bookingDataParsed = JSON.parse(bookingDataFromStorage);
      setBookingData(bookingDataParsed);
      
      // Calculate number of days
      const checkInDate = new Date(bookingDataParsed.valid_from);
      const checkOutDate = new Date(bookingDataParsed.valid_to);
      const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 3600 * 24));
      setNumDays(days);

      // Calculate price (room price + services)
      calculateTotalPrice(bookingDataParsed, days);
    }
  }, []);

  // Function to calculate the total price
  const calculateTotalPrice = (bookingData, days) => {
    const roomPrice = bookingData.room?.price || 0;
    const additionalServicesPrice = bookingData.services?.reduce((total, service) => total + service.price, 0) || 0;
    const roomPriceTotal = roomPrice * days;
    // Total price calculation
    const total = roomPriceTotal + additionalServicesPrice;
    setTotalPrice(total);
  };

  // Function to handle form submission
  const handleSubmit = async (e) =>{
    e.preventDefault();
    // Add booking to the database
    // Example:
    const bookingdata = {
      valid_from: bookingData.valid_from,
      valid_to: bookingData.valid_to,
      person: bookingData.person,
      room: bookingData.room.id,
      service: bookingData.services.map((service) => ({
        service: service.id, 
      })),
    };
    console.log(bookingdata);
    try {
      setIsLoading(true);
      const response = await apiService.postData('booking/create', bookingdata);
      console.log(response);
      if (response.message === 'Booking Registered') {
        console.log('Booking Registered');
        router('/confirmation');
      }
    } catch (error) {
      console.error('Error adding booking:', error);
    } finally {
      setIsLoading(false);
    }

   
     
    // Clear local storage
    // localStorage.removeItem('bookingData');
    // Redirect to confirmation page
  };


  return (
    <>
      <div className="bg-black">
        <hr />
        <h1 className="h-[260px] text-accent font-tertiary pt-10 pb-10 animate-fadeInUp mt-28 mb-5 text-6xl uppercase text-center">
          Checkout
        </h1>
        <hr />
      </div>
      
      <section className="py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto bg-white shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="p-6 border-r border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-primary">Guest Information</h2>

              <form action="#" method="POST">
                
                  <div className="col-span-1">
                    <label className="block text-gray-600 font-tertiary">Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      className="mt-1 p-3 w-full border font-tertiary focus:outline-none focus:ring-1 focus:ring-accent"
                      defaultValue={user?.name || ''}
                      disabled
                    />
                  </div>
                  {/* <div className="col-span-1">
                    <label className="block text-gray-600 font-tertiary">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      className="mt-1 p-3 w-full border font-tertiary focus:outline-none focus:ring-1 focus:ring-accent"
                      defaultValue={user?.lastName || ''}
                    />
                  </div> */}
                

                <div className="mb-6">
                  <label className="block text-gray-600 font-tertiary">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="mt-1 p-3 w-full border font-tertiary focus:outline-none focus:ring-1 focus:ring-accent"
                    defaultValue={user?.email || ''}
                    disabled
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-600 font-tertiary">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (123) 456-7890"
                    className="mt-1 p-3 w-full border font-tertiary focus:outline-none focus:ring-1 focus:ring-accent"
                    defaultValue={user?.contact || ''}
                    disabled
                  />
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-4 font-tertiary">Payment Method</h2>
                <div className="mb-6">
                  <label className="block text-gray-600 font-tertiary">Select Payment Method</label>
                  <select
                    id="payment"
                    name="payment"
                    className="mt-1 p-3 w-full focus:outline-none focus:ring-1 focus:ring-accent border font-tertiary"
                    disabled
                  >
                    <option value="credit-card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank-transfer">Bank Transfer</option>
                  </select>

                </div>

                <button type="submit" className="w-full btn btn-primary h-12" onClick={handleSubmit}>Confirm Booking</button>
              </form>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Booking Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-600 font-tertiary">Hotel Room</p>
                  <p className="text-gray-800 font-semibold font-tertiary">
                    ${bookingData.room?.price || 0} per day
                  </p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-600 font-tertiary">Check-in Date</p>
                  <p className="text-gray-800 font-semibold font-tertiary">{new Date(bookingData.valid_from).toLocaleDateString()}</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-600 font-tertiary">Check-out Date</p>
                  <p className="text-gray-800 font-semibold font-tertiary">{new Date(bookingData.valid_to).toLocaleDateString()}</p>
                </div>

                <div className="flex justify-between">
                  <h1 className="text-black font-bold font-tertiary">Additional Services</h1>
                  {/* <p className="text-gray-800 font-semibold font-tertiary">$25.00</p> */}
                </div>

                {bookingData.services?.map((service) => (
                  <div key={service.id} className="flex justify-between">
                    <p className="text-gray-600 font-tertiary">{service.name}</p>
                    <p className="text-gray-800 font-semibold font-tertiary">${service.price}</p>
                  </div>
                ))}

                <div className="flex justify-between font-semibold font-tertiary text-lg">
                  <p>Total Price</p>
                  <p className="text-gray-800">${totalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
