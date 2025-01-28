import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { jwtDecode } from 'jwt-decode';
const Token = localStorage.getItem('token');

function Authlayout(props) {
  const [authAllow , setAuthAllow] = React.useState(false);
  const token = localStorage.getItem('token');
  
  const user = token ? jwtDecode(token) : null;
  

  useEffect(()=>{
    if(!user || !user.id || !token){ 
      window.location.href = '/login'
      }
      else{
        setAuthAllow(true)
      }
  },[])

  return (
    authAllow &&  <div>
    <Header/>
    {props.children}
    <Footer/>
    </div>
  )
  
}

export default Authlayout