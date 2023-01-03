import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers:{
        createUserData:(state, action)=>{
            return action.payload
        }
    }
})

export default userDataSlice.reducer;

export const {createUserData} = userDataSlice.actions;

export const getUserData = (state)=> state.userData;