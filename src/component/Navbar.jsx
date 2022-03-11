import React from 'react'
import { useParams } from 'react-router-dom'


export default function Navbar({titel}) {
  let { userId } = useParams()
  return (
    <div className='navbar'>
        <div className='titel'>
            <h2>{titel}</h2>
            <span>Manage your Projects</span>
        </div>
        <div className="container">
        <div className="profil">
            <div className="profile__name">
                <h4>{userId}</h4>
                <h6>Projectmanager</h6>
            </div>
        </div>    
        </div>
    </div>
  )
}
