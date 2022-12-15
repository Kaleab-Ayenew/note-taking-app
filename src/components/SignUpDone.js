import React from "react";
import "./styles/signup-done.css"

export default function SignUpDone(props){
    function backToLogin(event){
        props.setActiveComp({name:"login",props:{}})
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