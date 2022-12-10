import React from "react";
import searchIcon from '../../images/search-icon-white.png'
export default function Header(){
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