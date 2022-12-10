import React from "react";
import "./styles/list.css";
import Header from "./list-comps/Header"
import NoteRow from "./list-comps/NoteRow"

export default function NoteList(){


    return(
        <div className="note-list-main">
            <Header/>

            <div className="note-list-column">
                <NoteRow />
            </div>

            <div className="add-button">
                
            </div>
            
        </div>
    )
}