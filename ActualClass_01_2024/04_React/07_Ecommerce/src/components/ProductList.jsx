import React from 'react'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';

function ProductList(props) {
    const { productList } = props;
    const cartProducts = [];

    const handleDeleteProduct = (product) => {
        console.log("delete item");
    }

    const handleAddProduct = (product) => {
        console.log("add item");
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
                                <div className="currentCartCount">{<printCount cartProduct={cartProducts} id={product.id}></printCount>}</div>
                                <AddBoxIcon onClick={() => { handleAddProduct(product) }}></AddBoxIcon>
                            </div>
                        </div>)
                    })}
                </>
            }
        </>
    )
}

function printCount(props) {

}

export default ProductList
