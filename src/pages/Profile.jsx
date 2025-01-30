import { useEffect, useState } from "react";
import { apiService } from "../services/Apiservice";
import * as Yup from "yup";
import { jwtDecode } from "jwt-decode";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      window.scrollTo(0, 0);
      const response = await apiService.getData(`booking/guestbooking`);
      setBookings(response.Bookingdata);
      console.log(bookings);

      const userFromToken = localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null;

      if (userFromToken) {
        setUserData(userFromToken);
        console.log(userFromToken);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    // authService.logout(Token);
     navigate("/");
     localStorage.removeItem("token");
     window.location.reload();
   };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    contact: Yup.string()
      .required('Contact number is required')
      .matches(/^[0-9]{10}$/, 'Contact number must be 10 digits'),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: userData?.name || '',
      email: userData?.email || '',
      contact: userData?.contact || '',
      status: 'Active',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      apiService
        .putData('auth/editprofile', values) 
        .then((response) => {
          console.log('User info updated successfully', response.data);
          toast.success('User info updated successfully');
        })
        .catch((error) => {
          console.error('Error updating user info', error);
        });
    },
  });

  return (

    <div className="bg-black">
      <hr />
      <h1 className="h-[260px] text-accent font-tertiary pt-10 pb-10 animate-fadeInUp mt-28 mb-5 text-6xl uppercase text-center">
        YOUR PROFILE
      </h1>
      <nav className="bg-accent border-b border-gray-300 shadow-sm">
        <ul className="flex justify-center space-x-8 py-4">
          <li>
            <button
              onClick={() => setActiveTab("Bookings")}
              className={`${activeTab === "Bookings" ? "text-black font-bold" : "text-white hover:-translate-y-1/4"
                } font-medium transition font-tertiary tracking-wider`}
            >
              Bookings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("Profile")}
              className={`${activeTab === "Profile" ? "text-black font-bold" : "text-white hover:-translate-y-1/4"
                } font-medium transition font-tertiary tracking-wider`}
            >
              Profile
            </button>
          </li>
          <li>
            <button className="text-white hover:-translate-y-1/4 font-medium transition font-tertiary tracking-wider"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {activeTab === "Bookings" && (
        <div className="bg-gray-100 h-max-content flex justify-center items-center p-6">
          <div className="bg-white shadow-lg p-8 w-full max-w-4xl">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              YOUR BOOKINGS
            </h1>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3 border border-gray-300">Booking Code</th>
                  <th className="p-3 border border-gray-300">Room</th>
                  <th className="p-3 border border-gray-300">Guest</th>
                  <th className="p-3 border border-gray-300">Validity</th>
                  <th className="p-3 border border-gray-300">Total Bill</th>
                  <th className="p-3 border border-gray-300">Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-gray-100">
                    <td className="p-3 border border-gray-300">{booking.booking_code}</td>
                    <td className="p-3 border border-gray-300">{booking.room}</td>
                    <td className="p-3 border border-gray-300">{booking.guest}</td>
                    <td className="p-3 border border-gray-300">
                      {new Date(booking.valid_from).toLocaleDateString()} - {new Date(booking.valid_to).toLocaleDateString()}
                    </td>
                    <td className="p-3 border border-gray-300">${booking.totalBill}</td>
                    <td className="p-3 border border-gray-300">
                      <span
                        className={`${booking.paymentstatus === "paid" ? "text-green-500" : "text-yellow-500"
                          }`}
                      >
                        {booking.paymentstatus}
                      </span>
                    </td>
                  </tr>
                ))}
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
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-600 font-medium mb-2 font-tertiary">Name</label>
                <input
                  type="text"
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  className="w-full border font-tertiary border-gray-300 p-3 focus:ring-2 focus:ring-accent-hover focus:outline-none"
                  placeholder="First Name"
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-sm">{formik.errors.name}</div>
                )}
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-2 font-tertiary">Email Address</label>
                <input
                  type="email"
                  name="email"
                  disabled
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full border font-tertiary border-gray-300 p-3 focus:ring-2 focus:ring-accent-hover focus:outline-none"
                  placeholder="Email Address"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                )}
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-2 font-tertiary">Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contact}
                  className="w-full border font-tertiary border-gray-300 p-3 focus:ring-2 focus:ring-accent-hover focus:outline-none"
                  placeholder="Contact Number"
                />
                {formik.touched.contact && formik.errors.contact && (
                  <div className="text-red-500 text-sm">{formik.errors.contact}</div>
                )}
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="btn btn-primary w-full md:w-auto h-12"
                  disabled={formik.isSubmitting}
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