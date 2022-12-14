import React from "react";
import "./styles/list.css";
import Header from "./list-comps/Header"
import NoteRow from "./list-comps/NoteRow"
import addButton from "../images/add-button.png"
import axios from "axios";
export default function NoteList(props){
    let [noteList, setNoteList] = React.useState([])

    React.useEffect(()=>{
        axios({
            url:"http://127.0.0.1:8000/api/my-notes/",
            method:"GET",
            headers:{
                authorization:"Token 238154cfb07b88f3bf43f481370206b0188edeea"
            }
        }).then((resp)=>{

        })
    },[])
    
    return(
        <div className="note-list-main">

            <Header/>

            <div className="note-list-column">
                <NoteRow />
            </div>

            <div className="add-button">
                <img src={addButton}/>
            </div>
            
        </div>
    )
}