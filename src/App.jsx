import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Guestlayout from './layouts/GuestLayouts'
import Signup from './pages/Signup'
import Login from './pages/Login'
import RoomDetails from './pages/RoomDetails'
import Facilities from './pages/Facilities'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import { apiService } from './services/Apiservice'



function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.getData('/products');  // Replace with your API endpoint
        setData(result);
        console.log(result);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <BrowserRouter>
        {/* Auth */}
        <Routes>
          {/* <Route path="/profile" element={<Authlayout><Profile/></Authlayout>}/>
        <Route path="/checkout" element={<Authlayout><Checkout/></Authlayout>}/> */}
        </Routes>
        {/* Guest */}
        <Routes>
          <Route path="" element={<Guestlayout><Home /></Guestlayout>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/room/:id" element={<Guestlayout><RoomDetails /></Guestlayout>} />
          <Route path="/facilities" element={<Guestlayout><Facilities /></Guestlayout>} />
          <Route path="/contactus" element={<Guestlayout><Contact /></Guestlayout>} />
          <Route path="/checkout" element={<Guestlayout><Checkout /></Guestlayout>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
