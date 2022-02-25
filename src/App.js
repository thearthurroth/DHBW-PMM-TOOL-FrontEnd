import React from "react";
import './App.css';
import Login from "./component/Login";
import ManualButton from './component/ManualButton';
import Dashboard from "./component/Dashboard";
//import Header from "./component/Header";
import Dashboard1 from "./component/Dashboard1";
import Projektansicht from "./component/Projektansicht";
import AllEmployees from "./component/AllEmployees";
import AllUsers from "./component/AllUsers";
import CreateEmployee from "./component/CreateEmployee";
/*
<Login />
<div className='ManualButton'>
<ManualButton/>
</div>
<Header />
 */
function App() {

    return (
            <div className='App'>
                <CreateEmployee />
            </div>

    )
  }
export default App