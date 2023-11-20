import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const local =  localStorage.getItem("userdata") !== null ? JSON.parse(localStorage.getItem("userdata")) : false;

const userSlice = createSlice({
    name :"user",
    initialState :{
        loading:false,
        user:null,
        error:null,
        loggedin:local
    },
    reducers:{
        logout(state){
            state.loggedin=false
            localStorage.removeItem("userdata")
        }
    },
    extraReducers: (builder)=> {
        builder
        .addCase(login.pending, (state)=>{
            state.loading= true
            state.user= null
            state.error= null
        }).addCase(login.fulfilled, (state, action)=>{
            state.loading= false
            state.user= action.payload
            state.error= null
            state.loggedin= true
        }).addCase(login.rejected, (state,action)=>{
            state.loading= false
            state.user= null
            state.error= action.error.code
            state.loggedin= false
        })
    }
})

export const { logout } = userSlice.actions;


export default userSlice.reducer;

export const login = createAsyncThunk("user/login", async(usercredentials)=>{
    const req = await axios.post("https://dummyjson.com/auth/login", usercredentials);
    const res = await req.data;
    console.log(res)
    localStorage.setItem("userdata", JSON.stringify(res))
    return res;
})

