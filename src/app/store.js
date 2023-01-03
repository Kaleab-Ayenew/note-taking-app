import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice"
import userDataReducer from "./userData"

export const store = configureStore({
    reducer:{
        notes: notesReducer,
        userData: userDataReducer
    }
})