import { Link } from 'react-router-dom'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
    const quantity = 12;
    return (
        <div className="navbar">

            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/cart">
                <div className="cart_container">
                    <ShoppingCartIcon></ShoppingCartIcon>
                    <div className="cart_quantity">{quantity}</div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar
