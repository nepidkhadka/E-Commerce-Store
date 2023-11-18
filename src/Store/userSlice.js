import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const userSlice = createSlice({
    name :"user",
    initialState :{
        loading:false,
        user:null,
        error:null
    },
})

export default userSlice.reducer;

export const login = createAsyncThunk("loginuser", async(usercredentials)=>{
    axios.post("https://dummyjson.com/auth/login",usercredentials)
        .then(res=>
        {
                console.log(res);
                navigate("/")
                localStorage.setItem("token", res.data.token)
        })
        .catch(err=>{
            alert("Login Failed : "  + err.response.data.message)
        })
})

