import React from "react";
import "./styles/list.css";
import Header from "./list-comps/Header"
import NoteRow from "./list-comps/NoteRow"
import addButton from "../images/add-button.png"
import SideBar from "./list-comps/SideBar";
import axios from "axios";
import { redirect, useLoaderData } from "react-router";
import { useSubmit } from "react-router-dom";

export default function NoteList(props){
    let [noteList, setNoteList] = React.useState([])
    let activeComp = props.activeComp
    let setActiveComp = props.setActiveComp
    let stateArray = [noteList, setNoteList, activeComp, setActiveComp]
    let loaderData = useLoaderData()
    let {setUserInfo} = props

    const submit = useSubmit()
    React.useEffect(()=>{
        setNoteList(loaderData.noteList)
        
    },[ ])
    console.log("out side effect", noteList, props.userInfo)
    console.log("But I haven't reached this point")

    function openEditor(event){
        let isNew = (event.currentTarget.name === "addBut")
        if (isNew){
            submit({redirect:"../new-note"},{method:"post"})
        }else{
            let noteId = event.currentTarget.id
            submit({redirect:`../editor/${noteId}`}, {method:"post"})

        }
        
        
    }

    let noteCompList = noteList.map((item,index)=>{
        return(<NoteRow clickHandler={openEditor} stateArray={stateArray} noteList={noteList} key={index} props={item} />)
    })

    console.log("I have reached the render position")
    return(
        <div className="note-list-main">
            <SideBar {...props}/>
            <Header {...props}/>
            {console.log("Side bar and header loaded")}
            <div className="note-list-column">
                {noteCompList}
            </div>
            {console.log("The note list was rendered")}

            <div className="add-button">
                <img onClick={openEditor} name="addBut" alt="Add Buttion" src={addButton}/>
            </div>
            
        </div>
    )
}


export async function action({request, params}){
    console.log("This action was ran")
    if (localStorage.getItem('user-data') === null){
        return(redirect("/login"))
    }

    let formData = await request.formData();
    if(formData.has("redirect")){
        return redirect(formData.get("redirect"))
    }

}


export async function loader({request, params}){
    if (localStorage.getItem('user-data') === null){
        return(redirect("/login"))
    }else{
        let loaderData = {}
        loaderData.noteList = await axios({
            url:`${localStorage.getItem('main-url')}/api/my-notes/`,
            method:"GET",
            headers:{
                authorization:`Token ${JSON.parse(localStorage.getItem('user-data')).token}`
            }
        }).then((resp)=>{
            return resp.data
        }).catch((err)=>{
            throw new Error(`Couldn't fetch data: ${err}`)
        })
        
        console.log(loaderData)
        return loaderData

    }
}

export async function indexLoader(){
    if (localStorage.getItem('user-data') === null){
        return(redirect("/login"))
    }else{
        return(redirect("/home"))
    }
}