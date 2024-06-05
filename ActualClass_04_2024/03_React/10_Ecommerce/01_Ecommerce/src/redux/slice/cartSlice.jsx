import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cartSliceName",
    initialState: {
        cartQuantity: 0,
        // array of object -> [{details of product, individual quantity}]
        cartProducts: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartQuantity++;
        },
        deleteFromCart: (state, action) => {
            state.cartQuantity--;
        }
    }
});


export const action = cartSlice.actions;
export default cartSlice;