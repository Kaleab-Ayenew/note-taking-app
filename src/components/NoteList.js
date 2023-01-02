import React from "react";
import "./styles/list.css";
import Header from "./list-comps/Header"
import NoteRow from "./list-comps/NoteRow"
import addButton from "../images/add-button.png"
import SideBar from "./list-comps/SideBar";
import axios from "axios";
import { redirect } from "react-router";
import {  useNavigate } from "react-router-dom";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { selectAllNotes, fetchNotes } from "../features/notes/notesSlice";

export default function NoteList(props){

    let activeComp = props.activeComp
    let setActiveComp = props.setActiveComp
    let stateArray = [activeComp, setActiveComp]

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const noteList = useSelector(selectAllNotes)


    if(localStorage.getItem("user-data")===null){
        navigate("/login")
    }
    React.useEffect(()=>{
        dispatch(fetchNotes())
        console.log("The Note List effect was run!")
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
        return(<NoteRow clickHandler={openEditor} stateArray={stateArray} noteList={noteList} key={index} props={item} />)
    })

    return(
        <div className="note-list-main">
            <SideBar {...props}/>
            <Header {...props}/>

            <div className="note-list-column">
                {noteCompList}
            </div>

            <div className="add-button">
                <img onClick={openEditor} name="addBut" alt="Add Buttion" src={addButton}/>
            </div>
            
        </div>
    )
}


export async function loader({request, params}){
    if (localStorage.getItem('user-data') === null){
        return(redirect("/login"))
    }
    return null
}