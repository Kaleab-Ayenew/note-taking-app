import React from "react";

export default function Header(){
    return (
        <div className="header-main">
            <h1>This is some random text</h1>
            <div className="search-bar">
                <i className="search-icon">
                </i>

                <input className="search-bar-input" type="text" />
            </div>
        </div>
    )
}