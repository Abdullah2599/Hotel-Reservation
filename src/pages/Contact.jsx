import React from 'react'
import backgroudimage from '/assets/img/contactbg.jpg'

function Contact() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center bg-black font-tertiary">
      
      <div className="w-4/5 bg-white shadow-lg p-10">
        <div className="flex flex-wrap md:flex-nowrap items-start justify-between">
          {/* Left Side */}
          <div className="w-full md:w-1/4 flex flex-col items-center space-y-8 pt-10">
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-map-marker-alt text-gray-800 text-3xl mb-2">

              </i>
              <div className="text-lg font-bold">Address</div>
              <div className="text-sm ">New York, USA</div>
              <div className="text-sm ">St-06 Yorkview</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <i className="fas fa-phone-alt text-gray-800 text-3xl mb-2"></i>
              <div className="text-lg font-bold">Phone</div>
              <div className="text-sm">+515184949</div>
              <div className="text-sm ">+656525848</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <i className="fa fa-envelope text-gray-800 text-3xl mb-2"></i>
              <div className="text-lg font-bold">Email</div>
              <div className="text-sm ">luxurystay@hospitality.com</div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-3/4 md:ml-8">
            <div className="text-xl font-semibold uppercase text-accent-hover mb-4">
              Send us a message
            </div>
            <p className="text-sm mb-6">Contact us. We would love to talk to you!</p>
            <form action="#">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-12 bg-gray-100 px-4 text-sm outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full h-12 bg-gray-100 px-4 text-sm outline-none"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Write Message"
                  className="w-full min-h-[110px] bg-gray-100 px-4 py-2 text-sm outline-none resize-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary text-white font-medium px-6 py-2 transition duration-300"
                >
                  Send Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact