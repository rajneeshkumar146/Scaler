import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'
import './App.css'
import User from './components/User'
import Cart from './components/Cart'
import PaginationProvider from './components/contexts/PaginationContext'

function App() {

  return (
    <PaginationProvider>
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
    </PaginationProvider>
  )
}

export default App
