import React from "react";


export default function SideBar(props){
    function logout(){
        localStorage.removeItem("user-data")
        props.setActiveComp({name:"login",props:{}})
    }
    let userData = JSON.parse(localStorage.getItem("user-data"))
    return (
        <div className="side-bar-main">
            <div className="profile-box">
                <span id="user-card">{userData.username}</span>
                <span id="logout-span" onClick={logout}>Logout</span>

            </div>
        </div>
    )
}