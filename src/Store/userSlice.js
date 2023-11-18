import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";

const userSlice = createSlice({
    name :"user",
    initialState :{
        loading:false,
        user:null,
        error:null
    },
    extraReducers: (builder)=> {
        builder
        .addCase(login.pending, (state)=>{
            state.loading= true
            state.user= true
            state.error= true
        }).addCase(login.fulfilled, (state, action)=>{
            state.loading= false
            state.user= action.payload
            state.error= null
        }).addCase(login.rejected, (state,action)=>{
            state.loading= false
            state.user= null
            state.error= action.error.message
        })
    }
})

export default userSlice.reducer;

export const login = createAsyncThunk("user/login", async(usercredentials)=>{
    const req = await axios.post("https://dummyjson.com/auth/login", usercredentials);
    const res = await req.data;
    console.log(res)
    localStorage.setItem("userdata", JSON.stringify(res))
    return res;
})

