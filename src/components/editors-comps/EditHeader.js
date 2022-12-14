import axios from "axios"
import React from "react"

export default function EditHeader(props){
    const saveState = props.saveState
    const setSaveState = props.setSaveState

    function saveHandler(event){
        setSaveState("saved")
        console.log("The Content Was Saved")
        console.log(saveState)
    }

    function deleteHandler(event){
        let editorCompObj = {
            name: "list",
            props:{}
        }

        let axiosData = {
            url: props.endPoint,
            method: "DELETE",
            headers:{
                authorization: "Token 238154cfb07b88f3bf43f481370206b0188edeea"
            }
        }

        axios(axiosData)
        .then((resp)=>{
            console.log(resp.data)
        })
        .catch((err)=>{
            console.log(err)
        })

        props.setActiveComp(editorCompObj)
    }

    return(
        <div className="editor-header">
            <div className="editor-header-cont">
                <button  onClick={saveHandler} id="save" className={`editor-button ${saveState ? "saved-button" : ""}`}>
                    Save
                </button>
                <span>Note Editor</span>
                <button onClick={deleteHandler} id="delete" className="editor-button">
                    Delete
                </button>
            </div>
        </div>
    )
}