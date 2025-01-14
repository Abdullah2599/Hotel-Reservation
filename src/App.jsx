import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Guestlayout from './layouts/GuestLayouts'
import Signup from './pages/Signup'
import Login from './pages/Login'
import RoomDetails from './pages/RoomDetails'
import Facilities from './pages/Facilities'
import Contact from './pages/Contact'



function App() {


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
     <Route path="" element={<Guestlayout><Home/></Guestlayout>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/room/:id" element={<Guestlayout><RoomDetails/></Guestlayout>}/>
     <Route path="/facilities" element={<Guestlayout><Facilities/></Guestlayout>}/>
     <Route path="/contactus" element={<Guestlayout><Contact/></Guestlayout>}/> 
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
