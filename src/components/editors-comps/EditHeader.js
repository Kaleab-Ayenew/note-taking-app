import axios from "axios"
import React from "react"

export default function EditHeader(props){
    const saveState = props.saveState
    const setSaveState = props.setSaveState

    function deleteHandler(event){
        let editorCompObj = {
            name: "list",
            props:{}
        }

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

        props.setActiveComp(editorCompObj)
    }

    function backToList(event){
        let editorCompObj = {
            name: "list",
            props:{}
        }
        props.setActiveComp(editorCompObj)
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