import React from "react";

export default function NoteRow(data){
    let props = data.props
    let title = props.title
    let content = props.content
    return (
        <div className="note-row">
            <div onClick={data.clickHandler} name="noteRow" id={props.id} className="note-row-content">
                <h2 className="note-title">
                    {title.length > 40 ? title.slice(0,25)+"..." : title}
                </h2>
                <p className="note-text">
                    {content.length > 95 ? content.slice(0,95)+"..." : content}
                    
                </p>
            </div>
        </div>
    );
}