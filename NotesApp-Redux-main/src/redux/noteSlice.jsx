import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "note",
    initialState: [
        {
            id:0,
            title: "Sample Note",
            note: `Add title & Notes in the above box & press enter to add a note. Click Edit, to Edit the content, & to see full content, if some content is hidden. Delete symbol deletes the Note.`
        }
    ], 
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        edit:(state,action)=>{
            state.splice(action.payload.param, 1, action.payload.values)
        },
        remove:(state,action)=>{
            state.splice(action.payload, 1);
        }
    }
})

export const {add, edit, remove} = noteSlice.actions
export default noteSlice.reducer