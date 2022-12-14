import React from "react";
import "./styles/list.css";
import Header from "./list-comps/Header"
import NoteRow from "./list-comps/NoteRow"
import addButton from "../images/add-button.png"
import axios from "axios";
export default function NoteList(props){
    let [noteList, setNoteList] = React.useState([])
    let activeComp = props.activeComp
    let setActiveComp = props.setActiveComp
    let stateArray = [noteList, setNoteList, activeComp, setActiveComp]

    function openEditor(event){
        let isNew = (event.target.name === "addBut")
        let editorCompObj = {
            name: "editor",
            props:{
                id: (isNew ? "add" : event.target.id),


            }
        }
        setActiveComp()
    }



    React.useEffect(()=>{
        console.log(noteList)
        axios({
            url:"http://127.0.0.1:8000/api/my-notes/",
            method:"GET",
            headers:{
                authorization:"Token 238154cfb07b88f3bf43f481370206b0188edeea"
            }
        }).then((resp)=>{
            setNoteList(resp.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    let noteCompList = noteList.map((item,index)=>{
        return(<NoteRow stateArray={stateArray} noteList={noteList} key={index} props={item} />)
    })

    function changeActiveComp(event){
        return null
    }
    
    return(
        <div className="note-list-main">

            <Header/>

            <div className="note-list-column">
                {noteCompList}
            </div>

            <div className="add-button">
                <img name="addBut" alt="Add Buttion" src={addButton}/>
            </div>
            
        </div>
    )
}