import React, { useEffect, useState } from "react";
import './Login.css';
import {useNavigate} from "react-router-dom"
import App from "../App";

function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate()

   function returnSubmit() {
       return isSubmitted
   };


    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "admin2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };


    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
                if (uname.value == "user1"){
                let link = "/dashboard/overview/"+uname.value
                navigate(link)} else if(uname.value == "admin2") {
                    let link = "/admin/dashboard/"+uname.value
                    navigate(link)
                }
                
                
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }


        
            
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="login-form">
            <div className="title">Sign In</div>
            {isSubmitted ? <div>User is successfully logged in</div>   : renderForm}

        </div>
    );
}
export default Login;