import React from "react";
import "./styles/signup-done.css"
import { useNavigate } from "react-router";


export default function SignUpDone(props){
    const navigate = useNavigate()
    function backToLogin(event){
        navigate("/login")
    }
    return (
        <div className="sign-up-done-main">
            <div className="message-box">
                <span>
                    Account Created Succesfully!
                </span>
                <span>    
                    Press the Button Below to Login!
                </span>
                <button onClick={backToLogin}>
                    Login
                </button>
            </div>
            
        </div>
    )
}