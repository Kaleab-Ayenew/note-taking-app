import React from "react";
import "./styles/list.css";
import Header from "./list-comps/Header"
import NoteRow from "./list-comps/NoteRow"
import addButton from "../images/add-button.png"

export default function NoteList(){

    
    return(
        <div className="note-list-main">

            <Header/>

            <div className="note-list-column">
                <NoteRow />
                <NoteRow />
                <NoteRow />
                <NoteRow />
                <NoteRow />
                <NoteRow />
                <NoteRow />
                <NoteRow />
                <NoteRow />
            </div>

            <div className="add-button">
                <img src={addButton}/>
            </div>
            
        </div>
    )
}