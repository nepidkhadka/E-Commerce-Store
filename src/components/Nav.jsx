import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {useSelector } from "react-redux";

const Nav = () => {

  const cartProduct = useSelector(state=>state.cart.cart);

  return (
    <header className="bg-gray-400 sticky z-10 top-0 left-0">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <NavLink className={({isActive})=>`${isActive ? "text-gray-100":"text-gray-200"} font-medium text-white text-lg `} to="/">
          {/* <span className="sr-only">Home</span> */}
        Home
        </NavLink>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block"></nav>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <NavLink
                className={({isActive})=>`${isActive?"bg-teal-600 text-white":"bg-gray-200 text-teal-600 hover:text-gray-100"} block rounded-md px-5 py-2.5 text-sm font-medium transition hover:bg-teal-700`}
                to="/product"
              >
                Products
              </NavLink>

              <NavLink
                className={({isActive})=>`${isActive?"bg-teal-600 text-white":"bg-gray-200 text-teal-600 hover:text-gray-100"} block rounded-md px-5 py-2.5 text-sm font-medium  transition hover:bg-teal-700`}
                to="/cart"
              >
                Cart ({cartProduct.length})
              </NavLink>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
