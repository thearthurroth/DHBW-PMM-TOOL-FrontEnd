import './App.css';
import Login from "./component/Login";
import ManualButton from './component/ManualButton';

function App() {

    return (
            <div className='App'>
                <Login />
                <div className='ManualButton'>
                <ManualButton/>
                </div>
            </div>

    )
  }
export default App