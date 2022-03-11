
import { Link, Route, Routes, useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import PrivateRoute from './component/PrivateRoute';
import Login from './component/Login';
import AllProjects from './component/AllProjects';
import AllTeams from './component/AllTeams';
import AllEmployees from './component/AllEmployees';
import Error from './component/Error';
import CreateEmployee from './component/CreateEmployee';
import CreateTeam from './component/CreateTeam';
import AllUsers from './component/AllUsers';
import "./scss/style.scss";
import Dashboard from './component/Dashboard'
import NavBar from './component/Assets/NavBar';



function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div>
      <NavBar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route element={<PrivateRoute isLogged={isLogged}/>}>
        <Route path='/dashboard/overview/:userId' element={<Dashboard/>}/>
        <Route path='/dashboard/projects/:userId' element={<AllProjects/>}/>
        <Route path='/dashboard/teams/:userId' element={<AllTeams/>}/>
        <Route path='/dashboard/mitarbeiter/:userId' element={<AllEmployees/>}/>
        <Route path='/dashboard/mitarbeiter/erstellen/:userId' element={<CreateEmployee/>}/>
        <Route path='/dashboard/teams/erstellen/:userId' element={<CreateTeam/>}/>
        <Route path='/admin/dashboard/:userId' element={<AllUsers/>}/>
      </Route>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </div>

    

  );
}
export default App;