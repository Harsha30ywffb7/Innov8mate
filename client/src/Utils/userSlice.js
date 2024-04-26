import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'user',
    initialState:{
        item: null
    },
    reducers:{
        addUser:(state, action)=>{
            state.item = action.payload
        },
        removeUser:(state, action)=>{
            state.item = null
        }
    }
})

export const {addUser, removeUser} = userSlice.actions

export default userSlice.reducer