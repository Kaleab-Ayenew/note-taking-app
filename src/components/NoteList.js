import React from "react";
import "./styles/list.css";
import Header from "./list-comps/Header"
import NoteRow from "./list-comps/NoteRow"
import addButton from "../images/add-button.png"
import SideBar from "./list-comps/SideBar";
import axios from "axios";


export default function NoteList(props){
    let [noteList, setNoteList] = React.useState([])
    let activeComp = props.activeComp
    let setActiveComp = props.setActiveComp
    let stateArray = [noteList, setNoteList, activeComp, setActiveComp]

    function openEditor(event){
        let isNew = (event.currentTarget.name === "addBut")
        console.log(event.currentTarget.name)
        let editorCompObj = {
            name: "editor",
            props:{
                id: (isNew ? "add" : event.currentTarget.id)
            }
        }
        setActiveComp(editorCompObj)
    }

    React.useEffect(()=>{
        if (localStorage.getItem('user-data') === null){
            props.setActiveComp({name:"login", props:{}})
        }else{
            props.setUserInfo(JSON.parse(localStorage.getItem('user-data')))
        }
    },[])



    React.useEffect(()=>{
        console.log(noteList)
        axios({
            url:`${props.url}/api/my-notes/`,
            method:"GET",
            headers:{
                authorization:`Token ${JSON.parse(localStorage.getItem('user-data')).token}`
            }
        }).then((resp)=>{
            setNoteList(resp.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    let noteCompList = noteList.map((item,index)=>{
        return(<NoteRow clickHandler={openEditor} stateArray={stateArray} noteList={noteList} key={index} props={item} />)
    })

    function changeActiveComp(event){
        return null
    }
    
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