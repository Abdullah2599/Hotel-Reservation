import React, { useEffect, useState } from 'react'
import LogoWhite from '/assets/img/logo-light.png'
import LogoDark from '/assets/img/logo-dark.png'
import { use } from 'react';
import { jwtDecode } from 'jwt-decode';
const Token = localStorage.getItem('token');

function Header() {
  const [header, setHeader] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    if (Token) {
      const decoded = jwtDecode(Token);
      setUserInfo(decoded);
    }
  },[Token]);
  const handleLogout = () => {
   // authService.logout(Token);
    localStorage.removeItem("token");
    setUserInfo(null);
    window.location.reload();
  };

  const toggleUserPopup = () => {
    setIsUserPopupOpen(!isUserPopupOpen);
  };

  return (
    <header
    className={`${header ? 'bg-white py-6 shadow-lg' :'bg-transparent py-8'} fixed z-50 w-full transition-all duration-500`}
    >
    <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
      <a href="/">
        {header ? (<img className='w-[160px]' src={LogoDark} alt="logo" />) : (<img className='w-[160px]' src={LogoWhite} alt="logo" />)}
      </a>
      <nav className={`${header ? 'text-primary' : 'text-white'} flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
        <a href="/" className='hover:text-accent transition'>Home</a>
        <a href="/rooms" className='hover:text-accent transition'>Rooms</a>
        <a href="/facilities" className='hover:text-accent transition'>Facilities</a>
        <a href="/contactus" className='hover:text-accent transition'>Contact</a>
        {Token ? (
  userInfo && (
    <div className="relative" onClick={toggleUserPopup}>
      <img
        width={40}
        height={40}
        className="h-8 w-8 rounded-full cursor-pointer"
        src="https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_640.png"
        alt="avatar-img"
      />
      {isUserPopupOpen && (
        <div className="absolute right-0 top-12 bg-white text-black p-4 rounded-md shadow-lg w-48">
          <p className="font-bold">{userInfo.name}</p>
          <p className="text-xs overflow-hidden text-ellipsis">{userInfo.email}</p>
          <button
            onClick={handleLogout}
            className="mt-2 w-full bg-red-600 text-white p-2 rounded-md"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
) : (
  <a href="/login" className="hover:text-accent transition">
    Login
  </a>
)}
      </nav>
    </div>
    </header>
  )
}

export default Header
