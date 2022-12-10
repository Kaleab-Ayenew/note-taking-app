import React from "react"

export default function EditHeader(){
    return(
        <div className="editor-header">
            <button id="save" className="editor-button">
                Save
            </button>
            <span>Note Editor</span>
            <button id="back" className="editor-button">
                Back
            </button>
        </div>
    )
}