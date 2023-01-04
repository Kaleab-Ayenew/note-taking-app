import React from "react";
import axios from "axios";
import { useRouteError } from "react-router";
import { json } from "react-router";

export default function EditBox(props){
    const [saveState, setSaveState] = React.useState("yes")
    let [editorContent, setEditorContent] = React.useState({title:"", content:""})
    const [error, setError] = React.useState({})

    if (error){
        console.log(error)
        throw new json({
            message: error.message,
            // data: error.response.data,
        },
        {
            status: error.status
        })
    }

    React.useEffect(()=>{
        if (!props.isNew){
            axios({
                url: props.endPoint,
                method: "GET",
                headers:{
                    authorization:`Token ${JSON.parse(localStorage.getItem('user-data')).token}`
                }
            }).then((resp)=>{
                if (resp.ok){
                    setEditorContent(resp.data)
                }
                
            }).catch((err)=>{
                console.log(err, err.message, "This Exception was raised.")
                setError(err)
            })
        }
    },[])

    const saveHandler = ()=>{
        
        let axiosData = {
            url:props.endPoint,
            method: props.isNew ? "POST" : "PUT" ,
            headers:{
                        authorization:`Token ${JSON.parse(localStorage.getItem('user-data')).token}`
            },
            data: editorContent
        }
        axios(axiosData).then((resp)=>{
            setEditorContent(resp.data)
            setSaveState("yes")
        }).catch((err)=>{
            console.log(err)
            setError(err)

        })
        
    }
    

    function editHandler(event){
        console.log(editorContent)
        setEditorContent((oldVal)=>{
            let edited = {...oldVal,[event.target.name]:event.target.value}
            return edited
        })
        setSaveState("no")    
    }

    return (
        <div className="editor-box">
            <input name="title" onChange={editHandler} value={editorContent.title} placeholder="Your Title" type="text"/>
            <textarea name="content" onChange={editHandler} value={editorContent.content} placeholder="Write a new note..." />
            
            <button  disabled={saveState === "yes"} onClick={saveHandler} id="save" className={`save-button ${saveState === "yes" ? "saved-button" : ""}`}>
                    Save
                </button>
        </div>
    )
}