import React from 'react'

function Checkout() {
  const bookingData = JSON.parse(localStorage.getItem('bookingData'));

  // Use the bookingData object as needed
  console.log(bookingData);
  return (

    <>
    
    <div className="bg-black"><hr /><h1 className=" h-[260px] text-accent font-tertiary pt-10 pb-10 animate-fadeInUp mt-28 mb-5 text-6xl uppercase text-center">
      Checkout
    </h1><hr /></div>
    <section className="py-12 px-4 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto bg-white shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="p-6 border-r border-gray-200">
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-primary">Guest Information</h2>

          <form action="#" method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="col-span-1">
                <label className="block text-gray-600 font-tertiary">First Name</label>
                <input type="text" name="firstName" placeholder="Enter first name" className="mt-1 p-3 w-full border font-tertiary focus:outline-none focus:ring-1 focus:ring-accent"/>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-600 font-tertiary">Last Name</label>
                <input type="text" name="lastName" placeholder="Enter last name" className="mt-1 p-3 w-full border font-tertiary focus:outline-none focus:ring-1 focus:ring-accent"/>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-tertiary">Email</label>
              <input type="email" name="email" placeholder="example@gmail.com" className="mt-1 p-3 w-full border font-tertiary focus:outline-none focus:ring-1 focus:ring-accent"/>
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-tertiary">Phone Number</label>
              <input type="tel" name="phone" placeholder="+1 (123) 456-7890" className="mt-1 p-3 w-full border font-tertiary focus:outline-none focus:ring-1 focus:ring-accent"/>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-4 font-tertiary">Payment Method</h2>
            <div className="mb-6">
              <label className="block text-gray-600 font-tertiary">Select Payment Method</label>
              <select id="payment" name="payment" className="mt-1 p-3 w-full focus:outline-none focus:ring-1 focus:ring-accent border font-tertiary">
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>

            <button type="submit" className="w-full btn btn-primary h-12">Confirm Booking</button>
          </form>
        </div>

        
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Booking Summary</h2>

          <div className="space-y-4">
      
            <div className="flex justify-between">
              <p className="text-gray-600 font-tertiary">Hotel Room</p>
              <p className="text-gray-800 font-semibold font-tertiary">$150.00</p>
            </div>

       
            <div className="flex justify-between">
              <p className="text-gray-600 font-tertiary">Check-in Date</p>
              <p className="text-gray-800 font-semibold font-tertiary">Jan 25, 2025</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 font-tertiary">Check-out Date</p>
              <p className="text-gray-800 font-semibold font-tertiary">Jan 30, 2025</p>
            </div>

            
            <div className="flex justify-between">
              <p className="text-gray-600 font-tertiary">Cleaning Fee</p>
              <p className="text-gray-800 font-semibold font-tertiary">$25.00</p>
            </div>

        
            <div className="flex justify-between font-semibold font-tertiary text-lg">
              <p>Total Price</p>
              <p className="text-gray-800">$175.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Checkout;
