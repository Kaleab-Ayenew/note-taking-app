import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers:{
        createUserData:(state, action)=>{
            return action.payload
        },
        deleteUserData:(state, action)=>{
            return null
        }
    }
})

export default userDataSlice.reducer;

export const {createUserData, deleteUserData} = userDataSlice.actions;

export const getUserData = (state)=> state.userData;