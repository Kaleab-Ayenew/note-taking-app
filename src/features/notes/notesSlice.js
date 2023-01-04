import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = []

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async ()=>{
    try{
        const response =  await axios({
            url:`${localStorage.getItem('main-url')}/api/my-notes/`,
            method:"GET",
            headers:{
                authorization:`Token ${JSON.parse(localStorage.getItem('user-data')).token}`
            }
        })
        return response.data
    }catch(err){
        throw new Error(err)
    }
})


const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers:{
        // addNote:(state, action)=>{
        //     state.push(action.payload)
        // },
        deleteAllNotes:(state, action)=>{
            return initialState
        }
    },
    extraReducers: (builder)=>{
        builder.
        addCase(fetchNotes.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export default notesSlice.reducer;

export const {addNote, deleteAllNotes} = notesSlice.actions;


//Selector Functions

export const selectAllNotes = createSelector([(state)=>state.notes],(notes)=>notes)