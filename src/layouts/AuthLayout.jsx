import React from 'react'
import { useNavigate } from 'react-router-dom';
const Token = localStorage.getItem('token');

function Authlayout(props) {
 // const navigate = useNavigate();
  const {children} = props;
  return (
    <>
    <div>
      Authlayout
    </div>
    {children}
    </>
  )
}

export default Authlayout