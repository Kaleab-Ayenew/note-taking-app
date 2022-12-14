import React from "react";

export default function NoteRow(data){
    let props = data.props
    let title = props.title
    let content = props.content
    let key = props.id
    return (
        <div className="note-row">
            <div className="note-row-content">
                <h2 className="note-title">
                    {title}
                </h2>
                <p className="note-text">
                    {content}
                    
                </p>
            </div>
        </div>
    )
}