import React from 'react'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../redux/slices/cartSlice'
function ProductList(props) {
    const { productList } = props;
    const cartProducts = useSelector((store) => {
        return store.cartReducer.cartProducts;
    });

    const dispatch = useDispatch();
    const handleDeleteProduct = (product) => {
        dispatch(action.deleteFromCart(product));
    }

    const handleAddProduct = (product) => {
        dispatch(action.addToCart(product));
    }

    return (
        <>
            {productList === null ? <h3>...Loadig</h3> :
                <>
                    {productList.map((product) => {
                        return (<div className='product'>
                            <img src={product.image} alt="" className='product_image'></img>
                            <div className='product_meta'>
                                <p className="product_title">Title: {product.title}</p>
                                <p className="price">Price: {product.price}</p>
                            </div>

                            <div className="add_to_cart_container">
                                <IndeterminateCheckBoxIcon onClick={() => { handleDeleteProduct(product) }}></IndeterminateCheckBoxIcon>
                                <div className="currentCartCount">{<PrintCount cartProducts={cartProducts} id={product.id}></PrintCount>}</div>
                                <AddBoxIcon onClick={() => { handleAddProduct(product) }}></AddBoxIcon>
                            </div>
                        </div>)
                    })}
                </>
            }
        </>
    )
}

function PrintCount(props) {
    const { cartProducts, id } = props;
    let quantity = 0;
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].id == id) {
            quantity = cartProducts[i].indQuantity;
        }
    }

    return <>{quantity}</>
}

export default ProductList
