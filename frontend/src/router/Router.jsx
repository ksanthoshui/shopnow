import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Products from "../pages/Products.jsx";
import Collections from "../pages/Collections.jsx";
import PlaceOrders from "../pages/PlaceOrders.jsx";
import Orders from "../pages/Orders.jsx";
import Cart from "../pages/Cart.jsx";
import Login from "../pages/Login.jsx";

// navigation bar
import Navbar from "../components/Navbar.jsx";
import Fooder from "../components/Fooder.jsx";
import SearchBar from "../components/SearchBar.jsx";

function Router() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Products />} />
          <Route path="/collection" element={<Collections />} />
          <Route path="/place-Order" element={<PlaceOrders />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Fooder/>
      </BrowserRouter>
    </>
  );
}

export default Router;
