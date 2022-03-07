import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

function PrivateRoute({isLogged}) {
  return (
    isLogged?<Outlet/>:<Navigate to="/"/>
  )
}

export default PrivateRoute