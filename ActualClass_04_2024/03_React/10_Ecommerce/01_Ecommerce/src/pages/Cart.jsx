import React from 'react'
import { useSelector } from 'react-redux';
import ProductList from "../components/ProductList"

function Cart() {
  const cartProductList = useSelector((store) => {
    return store.cartReducer.cartProducts;
  });

  return (
    <>
      <h2>Add to product list</h2>
      <div className=''>
        <ProductList productList={cartProductList}></ProductList>
      </div>
    </>
  )
}

export default Cart
