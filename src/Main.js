import React from "react";
import { Outlet } from "react-router";

export default function Main(){
    return(
        <div className="main-app">
            <Outlet />
        </div>
    )
}