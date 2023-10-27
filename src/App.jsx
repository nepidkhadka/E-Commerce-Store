import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/products"  element={<Products/>} />
        <Route path="/product/:id"  element={ <Product/> } />
        <Route path="/cart"  element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
