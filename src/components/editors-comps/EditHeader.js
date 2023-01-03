import axios from "axios"
import React from "react"

import { useSubmit, useNavigate } from "react-router-dom"

//Redux Imports

import { useDispatch } from "react-redux"

export default function EditHeader(props){
    const saveState = props.saveState
    const setSaveState = props.setSaveState
    const navigate = useNavigate()
    const dispatch = useDispatch()


    function deleteHandler(event){
        const axiosData = {
            url: props.endPoint,
            method:"DELETE",
            headers:{
                authorization: `Token ${localStorage.getItem("user-data").token}`
            }
        }
        axios(axiosData).
        then(resp=>{console.log(resp.data)}).
        catch((err)=>{
            console.log(err)
        })
        navigate("/home")
    }

    function backToList(event){
        
        navigate("/home")
    }

    return(
        <div className="editor-header">
            <div className="editor-header-cont">
            <button onClick={backToList} className="editor-button" name="back-home">Back</button>
                <span>Note Editor</span>
                <button onClick={deleteHandler} id="delete" className="editor-button">
                    Delete
                </button>
            </div>
        </div>
    )
}