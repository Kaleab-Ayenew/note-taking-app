import React from "react";
import axios from "axios";
import "./styles/Login.css"

export default function Login(props){

    let [formData, setFormData] = React.useState({})
    let [error, setError] = React.useState({})

    function inputHandler(event){
        setFormData((oldVal)=>{
            let newVal = {...oldVal, [event.target.name]:event.target.value}
            return newVal
        })
        console.log(formData)
    }


    function submitForm(event){
        let axiosData = {
            url:"http://127.0.0.1:8000/accounts/login/",
            method:"POST",
            data: formData,
        }
        axios(axiosData).
        then((resp)=>{
            localStorage.setItem("user-data", JSON.stringify(resp.data))

            if (resp.status === 200){
                props.setActiveComp({name:"list",props:{}})
                console.log(resp)}
        }).
        catch((err)=>{
            setError(err.response)
            console.log(error)
        })
    }

    React.useEffect(()=>{
        if (localStorage.getItem('user-data') !== null){
            props.setActiveComp({name:"list", props:{}})
        }
    },[])

    function goToSignUp(){
        props.setActiveComp({name:"signup", props:{}})
    }

    return(
        <div className="login-main">
            <div className="login-box">
                <h2>Login</h2>
                <span style={error ? {display:"block"} : {display:"none"}}
                className="error-box">

                    {error.data ? error.data.error : ""}

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
                <span onClick={goToSignUp} className="create-account">Create an Account</span>
            </div>
        </div>
    )
}