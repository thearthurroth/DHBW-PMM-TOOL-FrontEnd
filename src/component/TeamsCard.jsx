import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

export default function EmployeesCard() {
  const navigate = useNavigate();
  const data = [
    {
      data: 2000,
    },
    {
      data: 3000,
    },
    {
      data: 5000,
    },
    {
      data: 2140,
    },
    {
      data: 1300,
    },
    {
      data: 9800,
    }
  ]

  return (
    <div className='teamscard'>
        <Title title={"Teams"} subTitle={"Auslastung"}/>
        <div className="graph">
          <ResponsiveContainer width={"100%"} height="100%">
            <AreaChart width={500} height={400} data={data}>
              <defs>
                <linearGradient id="color" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="30%" stopColor={"#7bfdc7"} stopOpacity={0.4}/>
                  <stop offset="85%" stopColor='#7bfdc711' stopOpacity={0.2}/>                </linearGradient>
              </defs>
              <Tooltip cursor={false}  />
              <Area type="monotone" dataKey="data" stroke="#7bfdc7" fill="url(#color)"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-button">
          <button className='dButton' onClick={() =>{
            let link= '/dashboard/teams/erstellen/:userId';
            navigate(link)}} >Team erstellen</button>
          <button className='dButton' onClick={() =>{
            let link= '/dashboard/teams/:userId';
            navigate(link)}}>Teams verwalten</button>
        </div>
    </div>
  )
}