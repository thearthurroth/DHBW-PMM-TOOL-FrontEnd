import './component/App.css';
import Login from "./component/Login";
import {Component} from "react";

function App() {

    function onClick() {
    return (
        console.log("Funk")
    )
    }

    return (
        <div >
            <div className="App" >
                <Login />
            </div>
            <button onClick={onClick}>Click me</button>
        </div>
    )
  }
export default App