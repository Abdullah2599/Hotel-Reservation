import { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home'
import Guestlayout from './layouts/GuestLayouts'
import Signup from './pages/Signup'
import Login from './pages/Login'
import RoomDetails from './pages/RoomDetails'
import Facilities from './pages/Facilities'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import { apiService } from './services/Apiservice'
import { jwtDecode } from 'jwt-decode'
import { ToastContainer, toast } from 'react-toastify';
import OtpVerify from './pages/OtpVerify'
import Rooms from './components/Rooms'
import AllRooms from './pages/AllRooms'
import DRooms from './pages/DisplayRooms'
import Authlayout from './layouts/AuthLayout'
import Profile from './pages/Profile'
import Confirmation from './pages/Confirmation'

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}


function App() {
  // const navigate = useNavigate();
  const [tempdata, setTempData] = useState(null);
  const [isLogin, setIsLogin] = useState(false)
  const [userDetail, setUserDetail] = useState(localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : {})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.getData('room/availableroomlist');  // Replace with your API endpoint
        setData(result);
        // console.log(result);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
      // const response = await apiService.getData(`auth/checkstatus/${userDetail.id}`);
      // if (response.status === 200) {
      //   setIsLogin(true)
      // }
      // else {
      //   setIsLogin(false)
      //   localStorage.removeItem('token');
      //   setUserInfo(null);
      //   window.location.reload();
      // }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem('token');  // Get token from local storage

        if (!token) {
          console.log('No token found, redirecting to login...');
          navigate('/login');
          return;
        }

        const response = await apiService.postData(
          'auth/verifyuser',
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log('User verified:', response.data);
      } catch (error) {
        if (error.response) {
          console.log('Error verifying user:', error.response.data.message);

          if (error.response.status === 401) {
            toast.error('Token expired, redirecting to login...');
            localStorage.removeItem('token');
            // navigate('/login');
          }
        } else {
          console.error('Network Error:', error.message);
        }
      }
    };

    verifyUser();
  }, []);


  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
  );
  if (error) return <div>{error}</div>;

  return (
    <>
      <ToastContainer />
      <AppContext.Provider value={{ tempdata, setTempData, isLogin, setIsLogin, userDetail, setUserDetail, loading, error, data, rooms, setRooms }}>
        <BrowserRouter>
          {/* Guest */}
          <Routes>
            <Route path="" element={<Guestlayout><Home /></Guestlayout>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<OtpVerify />} />
            <Route path="/room/:id" element={<Guestlayout><RoomDetails /></Guestlayout>} />
            <Route path="/rooms" element={<Guestlayout><AllRooms /></Guestlayout>} />
            <Route path="/allrooms" element={<Guestlayout><DRooms /></Guestlayout>} />
            <Route path="/profile" element={<Authlayout><Profile /></Authlayout>} />
            <Route path="/confirmation" element={<Authlayout><Confirmation /></Authlayout>} />
            <Route path="/facilities" element={<Guestlayout><Facilities /></Guestlayout>} />
            <Route path="/contactus" element={<Guestlayout><Contact /></Guestlayout>} />
            <Route path="/checkout" element={<Authlayout><Checkout /></Authlayout>} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  )
}

export default App
