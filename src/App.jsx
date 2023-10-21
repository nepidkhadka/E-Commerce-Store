import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<h1 className="text-2xl text-slate-800 text-center mt-10">Dashboard</h1>} />
        <Route path="/product"  element={<Products/>} />
      </Routes>
    </>
  );
}

export default App;
