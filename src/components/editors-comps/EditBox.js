import React from "react";

export default function EditBox(){
    return (
        <div className="editor-box">
            <input placeholder="Your Title" type="text"/>
            <textarea placeholder="Write a new note..." />
        </div>
    )
}