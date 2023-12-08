import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

import { useDispatch, useSelector } from "react-redux";
import { action } from '../redux/slices/cartSlice';

function ProductList(props) {
    const { productList } = props;

    const cartProducts = useSelector((store) => { return store.cartReducer.cartProducts });

    const dispatch = useDispatch();
    const handleDeleteProduct = (product) => {
        dispatch(action.deleteFromcart(product));
    }

    const handleAddProduct = (product) => {
        dispatch(action.addToCart(product));
    }


    return (
        <>
            {productList == null ? <h3> Loading...</h3> :
                productList.map((product) => {
                    return (<div className="product">
                        <img src={product.image} alt=""
                            className='product_image' />
                        <div className="product_meta">
                            <p className="product_title">{product.title}</p>
                            <p className='Price'>$ {product.price}</p>
                        </div>

                        <div className="add_to_cart_container">
                            <IndeterminateCheckBoxIcon onClick={() => { handleDeleteProduct(product) }}></IndeterminateCheckBoxIcon>
                            <div className="currentCartCounter">{<PrintCount cartProducts={cartProducts} id={product.id}></PrintCount>}</div>
                            <AddBoxIcon onClick={() => { handleAddProduct(product) }}></AddBoxIcon>
                        </div>
                    </div>
                    )
                })}
        </>
    )
}

function PrintCount(props) {
    const { cartProducts, id } = props;
    let quantity = 0;
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].id == id) {
            quantity = cartProducts[i].indQunatity;
        }
    }

    return (
        <>{quantity}</>
    );
}

export default ProductList