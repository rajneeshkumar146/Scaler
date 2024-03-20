import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Home from './components/Home'
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>

    </>
  )
}

export default App
