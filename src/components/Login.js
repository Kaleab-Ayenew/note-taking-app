import React from "react";
import axios from "axios";
import "./styles/Login.css"

import { Form, redirect, useSubmit } from "react-router-dom";

export default function Login(props){

    let [formData, setFormData] = React.useState({})
    let [error, setError] = React.useState()
    const submit = useSubmit();
    function inputHandler(event){
        setFormData((oldVal)=>{
            let newVal = {...oldVal, [event.target.name]:event.target.value}
            return newVal
        })
        console.log(formData)
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
                submit({redirect:"../home"},{method:"post"})
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

        console.log("hi",props.url)
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
                
                <span onClick={goToSignUp} className="create-account">Create an Account</span>
            </div>
        </div>
    )
}
function doThis(){
    console.log("I am doing it")
    return redirect("sign-up")
}
export async function action({request, params}){
    let objFormData
    console.log("The action was fired")
    let formData = await request.formData()
        // if (formData.has("redirect")){
        //     console.log("this is the second",formData)
        //     console.log(formData.get("redirect"))
        //     return redirect("/home")
        // }else{
        //     return redirect("/sign-up")
        // }

    if (formData.has("redirect")){
        return redirect(formData.get("redirect"))
    }else{
        return redirect("/login")
    }

    
    
}

