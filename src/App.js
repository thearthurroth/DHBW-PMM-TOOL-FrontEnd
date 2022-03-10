
import { Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './component/PrivateRoute';
import Login from './component/Login';
import Dashboard1 from './component/Dashboard1';
import AllProjects from './component/AllProjects';
import AllTeams from './component/AllTeams';
import AllEmployees from './component/AllEmployees';
import Error from './component/Error';
import CreateEmployee from './component/CreateEmployee';
import CreateTeam from './component/CreateTeam';
import AllUsers from './component/AllUsers';
import Projektansicht from './component/Projektansicht';
import EditTeam from './component/EditTeam'
import EditProject from './component/EditProject';
import EditEmployees from './component/EditEmployees';

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className='App'>

    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route element={<PrivateRoute isLogged={isLogged}/>}>
        <Route path='/dashboard/overview/:userId' element={<Dashboard1/>}/>
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