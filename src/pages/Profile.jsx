import { useState } from "react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="bg-black">
      <hr />
      <h1 className="h-[260px] text-accent font-tertiary pt-10 pb-10 animate-fadeInUp mt-28 mb-5 text-6xl uppercase text-center">
        YOUR PROFILE
      </h1>
      {/* Sub navigation */}
      <nav className="bg-accent border-b border-gray-300 shadow-sm">
        <ul className="flex justify-center space-x-8 py-4">
          <li>
            <button
              onClick={() => setActiveTab("Bookings")}
              className={`${
                activeTab === "Bookings" ? "text-black font-bold" : "text-white hover:-translate-y-1/4"
              } font-medium transition font-tertiary tracking-wider`}
            >
              Bookings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("Profile")}
              className={`${
                activeTab === "Profile" ? "text-black font-bold" : "text-white hover:-translate-y-1/4"
              } font-medium transition font-tertiary tracking-wider`}
            >
              Profile
            </button>
          </li>
          <li>
           <button className="text-white hover:-translate-y-1/4 font-medium transition font-tertiary tracking-wider">
            Logout
           </button>
          </li>
        </ul>
      </nav>

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
            <h1 className="text-2xl font-bold text-gray-800 mb-6 font-tertiary">
              Personal Information
            </h1>
            <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <label className="block text-gray-600 font-medium mb-2 font-tertiary">First Name</label>
              <input
                type="text"
                className="w-full border font-tertiary border-gray-300 p-3 focus:ring-2 focus:ring-accent-hover focus:outline-none"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2 font-tertiary">Last Name</label>
              <input
                type="text"
                className="w-full border font-tertiary border-gray-300 p-3 focus:ring-2 focus:ring-accent-hover focus:outline-none"
                placeholder="Last Name"
              />
            </div>
          </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2 font-tertiary">Contact Number</label>
              <input
                type="text"
                className="w-full border font-tertiary border-gray-300 p-3 focus:ring-2 focus:ring-accent-hover focus:outline-none"
                placeholder="Contact Number"
              />
            </div>
          

          <div>
            <label className="block text-gray-600 font-medium mb-2 font-tertiary">Email Address</label>
            <input
              type="email"
              className="w-full border font-tertiary border-gray-300 p-3 focus:ring-2 focus:ring-accent-hover focus:outline-none"
              placeholder="Email Address"
            />
          </div>

          {/* <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-6">Address</h2>

          

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