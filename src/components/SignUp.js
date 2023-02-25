import React from "react";
import axios from "axios";
import "./styles/signup.css"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export default function Signup(props){
    let [formData, setFormData] = React.useState({})
    let [error, setError] = React.useState("")

    const navigate = useNavigate()
    function inputHandler(event){
        if (event.target.name === "confirm-password"){
            setError((event.target.value === formData.password ? "" : "Passwords don't match"))
            console.log(error)
        }
        setFormData((oldVal)=>{
            let newVal = {...oldVal, [event.target.name]:event.target.value}
            return newVal
        })
        console.log(formData)
    }


    function submitForm(event){
        let axiosData = {
            url:`${props.url}/accounts/sign-up/`,
            method:"POST",
            data: formData,
        }

        axios(axiosData).
        then((resp)=>{
            if (resp.status === 201){
                navigate("/sign-up-success")
            }
        }).
        catch((err)=>{
            error = err.response
            console.log(error)
        })

        
    }

    React.useEffect(()=>{
        if (localStorage.getItem('user-data') !== null){
            navigate("/home")
        }
    },[])

    return(
        <div className="signup-main">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <span style={error ? {display:"block"} : {display:"none"}} className="error-box">{JSON.stringify(error)}</span>
                <label htmlFor="username">
                Username
                <input value={formData.username} placeholder="Username" 
                onChange={inputHandler} type="text" name="username" id="username" />
                </label>

                <label htmlFor="password">
                    Email
                    <input value={formData.email} placeholder="Email" 
                    onChange={inputHandler} type="email" name="email" id="email" />
                </label>

                <label htmlFor="password">
                    Password
                    <input value={formData.password} placeholder="Password" 
                    onChange={inputHandler} type="password" name="password" id="password" />
                </label>
                
                <label htmlFor="password">
                    Confirm Password
                    <input style={error==="Passwords don't match" ? {border: "2px solid red"} : {}} placeholder="Confirm Password" 
                    onChange={inputHandler} type="password" name="confirm-password" id="confirm-password" />
                </label>
                
                <button onClick={submitForm}>Sign Up</button>
                <span className="create-account"><Link to="/login">Login</Link></span>
            </div>
        </div>
    )
}