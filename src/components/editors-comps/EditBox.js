import React from "react";
import axios from "axios";
export default function EditBox(props){
    const saveState = props.saveState
    const setSaveState = props.setSaveState
    const editorContent = props.editorContent
    const setEditorContent = props.setEditorContent
    React.useEffect(()=>{
        if (!props.isNew){
            axios({
                url: props.endPoint,
                method: "GET",
                headers:{
                    authorization:`Token ${JSON.parse(localStorage.getItem('user-data')).token}`
                }
            }).then((resp)=>{
                setEditorContent(resp.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    },[])

    React.useEffect(()=>{
        console.log("An effect has been triggered")
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
        }).catch((err)=>{
            console.log(err)
        })
        
    },[saveState])
    

    function editHandler(event){
        console.log(editorContent)
        setEditorContent((oldVal)=>{
            let edited = {...oldVal,[event.target.name]:event.target.value}
            return edited
        })
        console.log(props)
        console.log(typeof(setSaveState))
        setSaveState("")    
    }

    function saveHandler(event){
        setSaveState("saved")
        console.log("The Content Was Saved")
        console.log(saveState)
    }

    return (
        <div className="editor-box">
            <input name="title" onChange={editHandler} value={editorContent.title} placeholder="Your Title" type="text"/>
            <textarea name="content" onChange={editHandler} value={editorContent.content} placeholder="Write a new note..." />
            
            <button  onClick={saveHandler} id="save" className={`save-button ${saveState ? "saved-button" : ""}`}>
                    Save
                </button>
        </div>
    )
}