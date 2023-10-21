import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {


  return (
    <nav className="bg-slate-200 dark:bg-gray-800 py-4 sticky top-0 left-0">
        <div className="flex justify-end items-baseline space-x-4 mr-8 ">
          <NavLink
            to="/"
            className={({isActive})=>`${isActive?"text-gray-900  dark:text-white":"text-gray-400"} hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium absolute left-10`}
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({isActive})=>`${isActive?"text-gray-900 dark:text-white":"text-gray-400"} hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium`}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({isActive})=>`${isActive?"text-gray-800 dark:text-white":"text-gray-400"} hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium`}
          >
            Cart (0)
          </NavLink>
      </div>
    </nav>
  );
};

export default Nav;