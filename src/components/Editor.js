import React from "react"
import EditBox from "./editors-comps/EditBox"
import EditHeader from "./editors-comps/EditHeader"
import "./styles/editor.css"

export default function Editor(data){
    let [editorContent, setEditorContent] = React.useState({title:"", content:""})
    let [saveState, setSaveState] = React.useState("")
    let props = data.data
    let endPoint, isNew;
    if (props.id === "add"){
        endPoint = "http://127.0.0.1:8000/api/my-notes/"
        isNew = true
    }else{
        endPoint =`http://127.0.0.1:8000/api/note-content/${props.id}/`
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
                setActiveComp={data.setActiveComp}
                activeComp={data.activeComp}
                {...data}
                
            />

            <EditBox  
                isNew={isNew} 
                endPoint={endPoint} 
                editorContent={editorContent} 
                setEditorContent={setEditorContent}
                saveState={saveState}
                setSaveState={setSaveState}
                {...data}
            />
        </div>
    )
}