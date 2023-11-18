import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Store/userSlice';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [user, setuser] = useState({
        username:"",
        password:"",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setuser({...user, [name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(user))

        // axios.post("https://dummyjson.com/auth/login",usercredentials)
        // .then(res=>
        // {
        //         console.log(res);
        //         navigate("/")
        //         localStorage.setItem("token", res.data.token)
        // })
        // .catch(err=>{
        //     alert("Login Failed : "  + err.response.data.message)
        // })
    }

    return (
        <section className="flex flex-col md:flex-row justify-center items-center h-[90vh]">
            <div className="bg-white w-full md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700">Username</label>
                            <input type="text" onChange={handleChange} value={user.username} name="username" id="" placeholder="Enter Username" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus required />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input type="password" onChange={handleChange}  value={user.password} name="password" id="" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                        </div>
                        <button type="submit" className="w-full block bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
                    </form>

                    <hr className="my-6 border-gray-300 w-full" />
                    <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
                        account</a></p>


                </div>
            </div>

        </section>
    )
}

export default Login