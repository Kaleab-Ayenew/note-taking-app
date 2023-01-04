import axios from "axios"
import React from "react"

import { useNavigate } from "react-router-dom"

//Redux Imports

import { useSelector } from "react-redux"
import { getUserData } from "../../app/userData"

export default function EditHeader(props){
    const navigate = useNavigate()

    const userData = useSelector(getUserData)

    function deleteHandler(event){

        const axiosData = {
            url: props.endPoint,
            method:"DELETE",
            headers:{
                authorization: `Token ${userData.token}`
            }
        }

        axios(axiosData).
        then(resp=>{console.log(resp.data)}).
        catch((err)=>{
            console.log(err)
        })
        navigate("/home")
        
    }

    return(
        <div className="editor-header">
            <div className="editor-header-cont">
            <button onClick={()=>{navigate("/home")}} className="editor-button" name="back-home">Back</button>
                <span>Note Editor</span>
                <button onClick={deleteHandler} id="delete" className="editor-button">
                    Delete
                </button>
            </div>
        </div>
    )
}