import './component/App.css';
import Login from "./component/Login";
import {Component} from "react";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Login />
        </div>
    );
  }
}
export default App;