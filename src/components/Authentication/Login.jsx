import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Store/userSlice";

const Login = () => {
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setuser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user))
      .then((result) => {
        if (result.payload) {
          setuser("");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("Error From Login");
      });

    // axios.post("https://dummyjson.com/auth/login",{
    //     username:user.username,
    //     password:user.password
    // })
    // .then(res=>
    // {
    //         console.log(res);
    //         navigate("/")
    //         localStorage.setItem("token", res.data.token)
    // })
    // .catch(err=>{
    //     alert("Login Failed : "  + err.response.data.message)
    // })
  };

  if (loading === true)
    return (
      <div className="absolute left-2/4 top-1/2">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid text-indigo-600 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );

 

  return (
    <section className="flex flex-col md:flex-row justify-center items-center h-[90vh]">
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 flex flex-col items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Log in to your account
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                onChange={handleChange}
                value={user.username}
                name="username"
                id="username"
                placeholder="Enter Username"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                onChange={handleChange}
                value={user.password}
                name="password"
                id="password"
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full block bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />
          <p className="mt-8">
            Need an account?{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Create an account
            </a>
          </p>
        </div>
        {
           error!==null?(
            <div
            role="alert"
            className="rounded border-s-4 w-full border-red-500 bg-red-50 p-4 my-3"
          >
            <div className="flex items-center gap-2 text-red-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
    
              <strong className="block font-medium"> Login Failed </strong>
            </div>
    
            <p className="mt-2 text-sm text-red-700">{error}</p>
          </div>
           )
            :""
        }
      </div>
    </section>
  );
};

export default Login;
