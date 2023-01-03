import React from "react";

import { deleteUserData } from "../app/userData";
import { useDispatch } from "react-redux";

export default function Test(){
    const dispatch = useDispatch()
    return(
        <button onClick={()=>{dispatch(deleteUserData())}}>Delete USER Data</button>
    )
}