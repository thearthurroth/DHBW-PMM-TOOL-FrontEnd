import React from 'react'
import EmployeesCard from './EmployeesCard'
import Navbar from './Navbar.jsx'
import ProjectsCard from './ProjectsCard'
import TeamsCard from './TeamsCard'
import { useParams } from 'react-router-dom'


export default function Dashboard() {
  let { userId } = useParams()


  return (
    <div className='dashboard'>
      <Navbar titel={"Dashboard"}/>
      <div className='grid'>
        <div className='one'>
          <ProjectsCard/>
          <EmployeesCard/>
        </div> 
        <div className='two'>
          <TeamsCard/>
        </div>
      </div>
    </div>
  )
}
