import React from 'react'
import Title from './Title'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function ProjectsCard() {
  const navigate = useNavigate();

  

  return (
    <div className='projectscard'>
        <Title title={"Projects"} subTitle={"Übersicht"}/>
        <div className="table">
          <Table striped bordered hover variant="dark">
            <thead>
            <tr>
            <th>#</th>
            <th>Project Name</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>1</td>
            <td>Project X</td>
            </tr>
            </tbody>
          </Table>
        </div>
        <div className='dashboard-button'>
        <button className='dButton'>Projekt erstellen</button>
        <button className='dButton' onClick={() =>{
            let link= '/dashboard/projects/:userId';
            navigate(link)}}>Projekte verwalten</button>
        </div>
    </div>
  )
}
