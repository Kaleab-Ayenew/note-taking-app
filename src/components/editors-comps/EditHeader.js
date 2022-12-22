import axios from "axios"
import React from "react"

import { useSubmit, useNavigate } from "react-router-dom"

export default function EditHeader(props){
    const saveState = props.saveState
    const setSaveState = props.setSaveState
    const navigate = useNavigate()
    function deleteHandler(event){
        let axiosData = {
            url: props.endPoint,
            method: "DELETE",
            headers:{
                authorization: `Token ${JSON.parse(localStorage.getItem('user-data')).token}`
            }
        }

        axios(axiosData)
        .then((resp)=>{
            console.log(resp.data)
        })
        .catch((err)=>{
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