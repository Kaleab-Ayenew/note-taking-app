import React from "react";
import { useNavigate } from "react-router";

//Reduc Imports
import { deleteUserData, getUserData } from "../../app/userData";
import { useDispatch, useSelector } from "react-redux";


export default function SideBar(props){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userData = useSelector(getUserData);


    function logout(){
        localStorage.removeItem("user-data")
        console.log("Removed User Data, this is the localStorage now: ", localStorage.getItem("user-data"))
        dispatch(deleteUserData())
        console.log("LOGOUT: HERE IS THE userData state: ", userData)
        navigate("/login")
    }
    
    return (
        <div className="side-bar-main">
            <div className="profile-box">
                <span id="user-card">{userData ? userData.username : "Not Logged In"}</span>
                <span id="logout-span" onClick={logout}>Logout</span>

            </div>
        </div>
    )
}