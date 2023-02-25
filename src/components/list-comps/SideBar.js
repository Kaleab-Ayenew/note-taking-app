import React from "react";
import { useNavigate } from "react-router";

export default function SideBar(props){
    const navigate = useNavigate()
    function logout(){
        localStorage.removeItem("user-data")
        navigate("/login")
    }
    let userData = localStorage.getItem("user-data") ? JSON.parse(localStorage.getItem("user-data")) : null
    return (
        <div className="side-bar-main">
            <div className="profile-box">
                <span id="user-card">{userData ? userData.username : "Not Logged In"}</span>
                <span id="logout-span" onClick={logout}>Logout</span>

            </div>
        </div>
    )
}