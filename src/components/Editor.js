import React from "react"
import EditBox from "./editors-comps/EditBox"
import EditHeader from "./editors-comps/EditHeader"
import "./styles/editor.css"
import { useLoaderData } from "react-router"
import { redirect } from "react-router"

export default function Editor(props){
    let [editorContent, setEditorContent] = React.useState({title:"", content:""})
    let [saveState, setSaveState] = React.useState("")
    let endPoint, isNew;
    let mainUrl = localStorage.getItem("main-url")
    let noteId = useLoaderData()

    if (props.isNew){
        endPoint = `${mainUrl}/api/my-notes/`
        isNew = true
    }else{
        endPoint =`${mainUrl}/api/note-content/${noteId}/`
        isNew = false
    }

    
    return(
        <div className="editor-main">
            <EditHeader 
                isNew={isNew} 
                endPoint={endPoint} 
                editorContent={editorContent} 
                setEditorContent={setEditorContent}
                saveState={saveState}
                setSaveState={setSaveState}
                setActiveComp={props.setActiveComp}
                activeComp={props.activeComp}
                {...props}
                
            />

            <EditBox  
                isNew={isNew} 
                endPoint={endPoint} 
                editorContent={editorContent} 
                setEditorContent={setEditorContent}
                saveState={saveState}
                setSaveState={setSaveState}
                {...props}
            />
        </div>
    )
}

export async function editorLoader({request, params}){
    if (localStorage.getItem("user-data")===null){
        redirect("/login")
    }
    return (params.noteId)
    console.log(params)
}

export function newEditLoader(){
    if (localStorage.getItem("user-data") === null){
        return redirect("/login")
    }

    return null
}