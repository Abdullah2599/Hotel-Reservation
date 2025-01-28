import { useState } from "react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="bg-black">
      <hr />
      <h1 className="h-[260px] text-accent font-tertiary pt-10 pb-10 animate-fadeInUp mt-28 mb-5 text-6xl uppercase text-center">
        WELCOME TO YOUR PROFILE
      </h1>
      <hr />
      {/* Sub navigation */}
      <nav className="bg-accent border-b border-gray-300 shadow-sm">
        <ul className="flex justify-center space-x-8 py-4">
          <li>
            <button
              onClick={() => setActiveTab("Bookings")}
              className={`${
                activeTab === "Bookings" ? "text-yellow-500 font-bold" : "text-white hover:text-yellow-500"
              } font-medium transition`}
            >
              Bookings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("Profile")}
              className={`${
                activeTab === "Profile" ? "text-yellow-500 font-bold" : "text-white hover:text-yellow-500"
              } font-medium transition`}
            >
              Profile
            </button>
          </li>
          <li>
           <button className="text-white hover:text-yellow-500 font-medium transition">
            Logout
           </button>
          </li>
        </ul>
      </nav>
      {/* CODE FOR ACTIVE TABS RESPECTIVELY */}

      {/* Bookings Tab */}
      {activeTab === "Bookings" && (
        <div className="bg-gray-100 h-max-content flex justify-center items-center p-6">
          <div className="bg-white shadow-lg p-8 w-full max-w-4xl">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              YOUR BOOKINGS
            </h1>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3 border border-gray-300">Booking ID</th>
                  <th className="p-3 border border-gray-300">Booking Date</th>
                  <th className="p-3 border border-gray-300">Check-In</th>
                  <th className="p-3 border border-gray-300">Check-Out</th>
                </tr>
              </thead>
              <tbody>
                 
                  <tr className="hover:bg-gray-100">
                    <td className="p-3 border border-gray-300">01</td>
                    <td className="p-3 border border-gray-300">28-01-2025</td>
                    <td className="p-3 border border-gray-300">28-01-2025 12:00 AM</td>
                    <td className="p-3 border border-gray-300">28-01-2025 12:00 PM</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Profile Tab */}
      {activeTab === "Profile" && (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
          <div className="bg-white shadow-lg p-8 w-full max-w-5xl">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Personal Information
            </h1>
            {/* Profile form (remains the same as before) */}
            <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 font-medium mb-2">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-600 font-medium mb-2">Date</label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Date</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Month</label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Month</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Year</label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Year</option>
              </select>
            </div>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-600 font-medium mb-2">Country/Region</label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Country/Region</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Area</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Area"
              />
            </div> */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Number</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Number"
              />
            </div>
          {/* </div> */}

          <div>
            <label className="block text-gray-600 font-medium mb-2">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Email Address"
            />
          </div>

          {/* <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-6">Address</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-600 font-medium mb-2">Country/Region</label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Country/Region</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Town/City</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Town/City"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Post Code</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Post Code"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">Address</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Address"
            />
          </div> */}

          <div className="flex justify-end mt-6">
            <button
              type="button"
              className="btn btn-primary w-full md:w-auto h-12"
            >
              Save Changes
            </button>
          </div>
        </form>
          </div>
        </div>
      )}
    </div>
  );
}