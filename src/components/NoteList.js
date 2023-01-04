import React from "react";
import "./styles/list.css";
import Header from "./list-comps/Header"
import NoteRow from "./list-comps/NoteRow"
import addButton from "../images/add-button.png"
import SideBar from "./list-comps/SideBar";
import {  useNavigate } from "react-router-dom";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { selectAllNotes, fetchNotes } from "../features/notes/notesSlice";

export default function NoteList(props){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const noteList = useSelector(selectAllNotes)

    React.useEffect(()=>{
        dispatch(fetchNotes())
    },[])

    function openEditor(event){
        let isNew = (event.currentTarget.name === "addBut")
        if (isNew){
            navigate("/new-note")
        }else{
            let noteId = event.currentTarget.id
            navigate(`/editor/${noteId}`)
        }
    }

    let noteCompList = noteList.map((item,index)=>{
        return(<NoteRow clickHandler={openEditor} noteList={noteList} key={index} props={item} />)
    })

    return(
        <div className="note-list-main">
            {/* This is the side bar*/}
            <SideBar {...props}/>

            {/* This is the header*/}
            <Header {...props}/>

            {/* This is the notes list */}
            <div className="note-list-column">
                {noteCompList}
            </div>

            {/* This is the add button */}
            <div className="add-button">
                <img onClick={openEditor} name="addBut" alt="Add Buttion" src={addButton}/>
            </div>
            
        </div>
    )
}

