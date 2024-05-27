import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'
import './App.css'
import User from './components/User'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  )
}

export default App
