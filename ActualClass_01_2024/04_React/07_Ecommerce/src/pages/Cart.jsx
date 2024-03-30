import React from 'react'
import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList';

function Cart() {
    const productList = useSelector((store) => {
        return store.cartReducer.cartProducts;
    });
    return (
        <>
            <h2>Add to product list</h2>
            <div className="cart_product_wrapper">
                <ProductList productList={productList}></ProductList>
            </div>
        </>
    )
}

export default Cart