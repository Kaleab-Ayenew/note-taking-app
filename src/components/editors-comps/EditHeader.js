import React from "react"

export default function EditHeader(props){
    const saveState = props.saveState
    const setSaveState = props.setSaveState

    function saveHandler(event){
        setSaveState("saved")
        console.log("The Content Was Saved")
        console.log(saveState)
    }

    return(
        <div className="editor-header">
            <div className="editor-header-cont">
                <button  onClick={saveHandler} id="save" className={`editor-button ${saveState ? "saved-button" : ""}`}>
                    Save
                </button>
                <span>Note Editor</span>
                <button id="back" className="editor-button">
                    Back
                </button>
            </div>
        </div>
    )
}