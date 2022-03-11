import React from 'react'
import './NavBar.css'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()

  function RenderButton(){
    return (
      <button className='NavBtn' onClick={() =>{
        let link= '/';
        navigate(link)}}>Logout</button> 
    )
  }

  return (
    <div className='NavBarTop'>
        PMM-Tool
      <div className='topnav__right'>
         <RenderButton/>
      </div>  
    </div>
  )
}

export default NavBar


