import './App.css';
import Login from "./component/Login";
import ManualButton from './component/ManualButton';
import Dashboard from "./component/Dashboard";
import Header from "./component/Header";
/*
<Login />
<div className='ManualButton'>
<ManualButton/>
</div>
 */
function App() {

    return (
            <div className='App'>
                <Header />
                <Dashboard />
            </div>

    )
  }
export default App