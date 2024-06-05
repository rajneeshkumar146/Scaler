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
            const ProductToBeAdded = action.payload;

            const cartProduct = state.cartProducts.find((cProduct) => {
                return cProduct.id == ProductToBeAdded.id;
            });

            if (cartProduct != undefined) {
                cartProduct.indQuantity++;
            } else {
                // Not present in cart.
                ProductToBeAdded.indQuantity = 1;    // individual quantity.
                state.cartProducts.push(ProductToBeAdded);
            }
            // console.log(ProductToBeAdded);

        },
        deleteFromCart: (state, action) => {
            const ProductToBeAdded = action.payload;
            const cartProductIndex = state.cartProducts.findIndex((cProduct) => {
                return cProduct.id === ProductToBeAdded.id;
            });

            if (cartProductIndex != -1) {
                state.cartQuantity--;

                let product = state.cartProducts[cartProductIndex];

                if (product.indQuantity === 1) {
                    state.cartProducts.splice(cartProductIndex, 1);
                } else {
                    product.indQuantity--;
                }
            }
        }
    }
});


export const action = cartSlice.actions;
export default cartSlice;