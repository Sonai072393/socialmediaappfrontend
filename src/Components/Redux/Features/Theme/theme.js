import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:'themeSlice',
    initialState:{
        mode:"Bright"
    },
    reducers:{
        theme:(state,action)=>{
            console.log(action,"action")
            state.mode=action.payload.mode
        }
    }
})

export const { theme} = themeSlice.actions;
export const themeMode = (state)=>state.theme.mode
export default themeSlice.reducer