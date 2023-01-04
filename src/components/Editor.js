import React from "react"
import EditBox from "./editors-comps/EditBox"
import EditHeader from "./editors-comps/EditHeader"
import "./styles/editor.css"
import { useLoaderData, useParams } from "react-router"
import { redirect } from "react-router"

export default function Editor(props){
    const params = useParams()
    
    let mainUrl = localStorage.getItem("main-url")
    let noteId = params['noteId']
    let endPoint = props.isNew ? `${mainUrl}/api/my-notes/` : `${mainUrl}/api/note-content/${noteId}/`;

    return(
        <div className="editor-main">
            <EditHeader 
                isNew={props.isNew} 
                endPoint = {endPoint}
                noteId = {noteId}
            />

            <EditBox  
                isNew={props.isNew}
                endPoint = {endPoint}
                noteId = {noteId} 
            />
        </div>
    )
}
