import React from "react";
import searchIcon from '../../images/search-icon-white.png'
export default function Header(){
    window.onscroll = ()=>{
        let header = document.getElementsByClassName("header-main")[0];

        if ((window.pageYOffset - header.offsetHeight) > header.offsetTop){
            header.style.transformY = `translateY(${header.offsetHeight}px)`
            header.classList.add("sticky-header")
        }else{
            header.classList.remove("sticky-header")
        }
    }
    return (
        <div className="header-main">
            <div className="search-bar">
                <i className="search-icon">
                    <img src={searchIcon} alt="search-icon"/>
                </i>

                <input placeholder="Search Notes" className="search-bar-input" type="text" />
            </div>
        </div>
    )
}