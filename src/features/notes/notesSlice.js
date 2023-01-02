import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const deleteNote = createAsyncThunk("notes/deleteNote", async (noteId)=>{
    try{
        const response =  await axios({
            url:`${localStorage.getItem('main-url')}/api/note-content/${noteId}/`,
            method:"DELETE",
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
    },
    extraReducers: (builder)=>{
        builder.
        addCase(fetchNotes.fulfilled, (state, action)=>{
            return action.payload
        }).
        addCase(deleteNote.fulfilled, (state, action)=>{
            console.log("A note has been deleted", action.payload)
            return state
        })
    }
})

export default notesSlice.reducer;

export const {addNote} = notesSlice.actions;


//Selector Functions

export const selectAllNotes = (state)=>{
    return state.notes
}