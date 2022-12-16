import React from "react";
import searchIcon from '../../images/search-icon-white.png'
export default function Header(props){
    window.onscroll = ()=>{
        let header = document.getElementsByClassName("header-main")[0];

        if ((window.pageYOffset) > header.offsetTop){
            header.classList.add("sticky-header")
        }else{
            header.classList.remove("sticky-header")
        }
    }

    function navButHandler(event){
        
        let sideBar = document.getElementsByClassName("side-bar-main")[0]
        sideBar.classList.toggle("show")
        let addBut = document.getElementsByClassName("add-button")[0]
        addBut.classList.toggle("hide")
        event.currentTarget.classList.toggle("active")
    }

    
    return (
        <div className="header-main">
            <div className="search-bar">
                <div onClick={navButHandler} className="side-bar-button">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <i className="search-icon">
                    <img src={searchIcon} alt="search-icon"/>
                </i>

                <input placeholder="Search Notes" className="search-bar-input" type="text" />
            </div>
        </div>
    )
}