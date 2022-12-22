import React from "react";
import axios from "axios";
import "./styles/Login.css"

import { Form, redirect, useSubmit, useNavigate, Link } from "react-router-dom";

export default function Login(props){

    let [formData, setFormData] = React.useState({})
    let [error, setError] = React.useState()

    const navigate = useNavigate()
    

    React.useEffect(()=>{
        if (localStorage.getItem("user-data") !== null){
            navigate("/home")
        }
    },[])
    

    function inputHandler(event){
        setFormData((oldVal)=>{
            let newVal = {...oldVal, [event.target.name]:event.target.value}
            return newVal
        })
    }


    function submitForm(event){
        let axiosData = {
            url:`${props.url}/accounts/login/`,
            method:"POST",
            data: formData,
        }
        axios(axiosData).
        then((resp)=>{
            localStorage.setItem("user-data", JSON.stringify(resp.data))

            if (resp.status === 200){
                navigate("/home")
                console.log(resp)}
        }).
        catch((err)=>{
            
            console.log(err)
            if (err.message === "Network Error"){
                setError(err.message)
            }else{
                setError(err.response.data.error)
            }
        })
    }

    return(
        <div className="login-main">
            <div className="login-box">
                <h2>Login</h2>
                <span style={error ? {display:"block"} : {display:"none"}}
                className="error-box">

                    {error ? error : ""}

                    </span>
                
                <label htmlFor="username">
                Username
                <input onChange={inputHandler} placeholder="Enter Username" type="text" name="username" id="username" />
                </label>
                
                <label htmlFor="password">
                    Password
                    <input onChange={inputHandler} placeholder="Enter Password" type="password" name="password" id="password" />
                </label>
                
                <button onClick={submitForm}>Login</button>
                
                    <span className="create-account"><Link to={"/sign-up"}>Create an Account</Link></span>
                
                
            </div>
        </div>
    )
}