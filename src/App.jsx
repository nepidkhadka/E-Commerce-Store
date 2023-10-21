import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/product"  element={<Products/>} />
        <Route path="/cart"  element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
