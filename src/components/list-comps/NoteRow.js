import React from "react";

export default function NoteRow(data){
    let props = data.props
    let title = props.title
    let content = props.content
    return (
        <div className="note-row">
            <div name="noteRow" id={props.id} className="note-row-content">
                <h2 className="note-title">
                    {title.length > 25 ? title.slice(0,25)+"..." : title}
                </h2>
                <p className="note-text">
                    {content.length > 50 ? content.slice(0,50)+"..." : content}
                    
                </p>
            </div>
        </div>
    );
}