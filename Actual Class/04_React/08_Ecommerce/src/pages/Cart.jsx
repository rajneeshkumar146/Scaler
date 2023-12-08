import React from 'react'
import ProductList from '../components/ProductList'
import { useSelector } from "react-redux";

function Cart() {
    const productList = useSelector((store) => { return store.cartReducer.cartProducts })
    return (
        <>
            <h1>Add to product list</h1>
            <div className="cart_product_wrapper">
                <ProductList productList={productList}></ProductList>
            </div>

        </>
    )
}

export default Cart