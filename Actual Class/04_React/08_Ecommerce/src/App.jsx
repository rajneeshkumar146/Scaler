import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home';
import Product from './components/Product'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import User from './pages/User'
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}> </Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="/cart" element={<Cart></Cart>}> </Route>
        <Route path="/user" element={<User></User>}> </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}> </Route>
      </Routes>
    </>

  )
}

export default App
