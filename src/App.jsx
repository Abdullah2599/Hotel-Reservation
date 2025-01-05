import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Guestlayout from './layouts/GuestLayouts'



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
     {/* <Route path="/login" element={<Guestlayout><Login/></Guestlayout>}/>
     <Route path="/signup" element={<Guestlayout><Signup/></Guestlayout>}/>
     <Route path="/cart" element={<Guestlayout><Cart/></Guestlayout>}/>
     <Route path="/about" element={<Guestlayout><About/></Guestlayout>}/> */}
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
