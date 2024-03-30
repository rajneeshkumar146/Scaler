import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cartSliceName",
    initialState: {
        cartQuantity: 0,
        // array of object-> [{details of the product, individial quantity}]
        cartProducts: []
    },
    reducers: {
        addTocart: (state, action) => {
            state.cartQuantity++;
            

        },
        deleteFromCart: (state, action) => {
            state.cartQuantity--;

        }
    }

});

export default cartSlice;
