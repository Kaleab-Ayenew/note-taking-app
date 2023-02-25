import React from "react";
import "./styles/list.css";
import Header from "./list-comps/Header"
import NoteRow from "./list-comps/NoteRow"
import addButton from "../images/add-button.png"
import SideBar from "./list-comps/SideBar";
import axios from "axios";
import { redirect } from "react-router";
import {  useNavigate } from "react-router-dom";

export default function NoteList(props){
    let [noteList, setNoteList] = React.useState([])
    let activeComp = props.activeComp
    let setActiveComp = props.setActiveComp
    let stateArray = [noteList, setNoteList, activeComp, setActiveComp]


    const navigate = useNavigate()
    if(localStorage.getItem("user-data")===null){
        navigate("/login")
    }
    React.useEffect(()=>{
            axios({
                url:`${localStorage.getItem('main-url')}/api/my-notes/`,
                method:"GET",
                headers:{
                    authorization:`Token ${JSON.parse(localStorage.getItem('user-data')).token}`
                }
            }).then((resp)=>{
                setNoteList(resp.data)
            }).catch((err)=>{
                throw new Error(`Couldn't fetch data: ${err}`)
            })
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