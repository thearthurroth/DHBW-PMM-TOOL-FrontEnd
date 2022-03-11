import React from 'react'
import {MdLogout} from 'react-icons/md'
import {FiShoppingBag} from 'react-icons/fi'
import Links from './Links'
import { useNavigate } from 'react-router-dom'
export default function Sidebar() {
    const navigate = useNavigate();

    const links1 = [
        {
            text:"Logout",
            icon: MdLogout,
        }
     
    ]

  return (

    <div className='sidebar'>
        <div className='brand'> PMM-Tool </div>
        <div className='links'>
            <Links links={links1} onClick={() =>{
            let link= '/';
            navigate(link)}}/>    
        </div>
    </div>
  )
}
