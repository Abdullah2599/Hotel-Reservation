import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation() {
  // State management
  const [bookingData, setBookingData] = useState({});
  const [user, setUser] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [numDays, setNumDays] = useState(0);
  const router = useNavigate();

  useEffect(() => {
    const bookingDataFromStorage = localStorage.getItem('bookingData');
    const userFromToken = localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null;

    if (userFromToken) {
      setUser(userFromToken);
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

  return (
    <>
      <div className="bg-black text-white">
        <hr />
        <h1 className="text-5xl font-tertiary pt-10 pb-10 animate-fadeInUp mt-28 mb-5 text-accent text-center">
          Booking Confirmation
        </h1>
        <hr />
      </div>

      <section className="py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto bg-white shadow-xl overflow-hidden border-b-2 border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="p-8 bg-gray-50 shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Booking Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-600">Hotel Room</p>
                  <p className="text-gray-800 font-semibold">${bookingData.room?.price || 0} / night</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Check-in Date</p>
                  <p className="text-gray-800 font-semibold">{new Date(bookingData.valid_from).toLocaleDateString()}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Check-out Date</p>
                  <p className="text-gray-800 font-semibold">{new Date(bookingData.valid_to).toLocaleDateString()}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Number of Days</p>
                  <p className="text-gray-800 font-semibold">{numDays} days</p>
                </div>
                {bookingData.services?.map((service) => (
                  <div key={service.id} className="flex justify-between">
                    <p className="text-gray-600">{service.name}</p>
                    <p className="text-gray-800 font-semibold">${service.price}</p>
                  </div>
                ))}

                <div className="flex justify-between font-semibold text-lg text-accent">
                  <p>Total Price</p>
                  <p className="text-gray-800">${totalPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 ">Guest Information</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-600">Name</p>
                  <p className="text-gray-800">{user?.name}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Email</p>
                  <p className="text-gray-800">{user?.email}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Phone</p>
                  <p className="text-gray-800">{user?.contact}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Payment Method</p>
                  <p className="text-gray-800">Credit Card</p>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Thank You for Your Booking!</h3>
                  <p className="text-gray-600">
                    Your booking has been successfully processed. A confirmation email has been sent to <strong>{user?.email}</strong> with all the details.
                  </p>
                  <p className="text-gray-600">
                    Should you need to make any changes to your reservation or have any questions, please don’t hesitate to contact us.
                  </p>
                </div>
                <div className="flex justify-end">
                  <button className="px-4 py-2 text-white bg-accent border-0 rounded-md shadow-sm hover:bg-accent-dark" onClick={
                    () => {
                      localStorage.removeItem("bookingData");
                      router("/");
                    }
                  }>
                    Go to Home
                  </button>
              </div>
              </div>
  
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Confirmation;
