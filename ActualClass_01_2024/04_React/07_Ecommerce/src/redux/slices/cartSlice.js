import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cartSliceName",
    initialState: {
        cartQuantity: 0,
        // array of object-> [{details of the product, individial quantity}]
        cartProducts: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartQuantity++;
            const productToBeAdded = action.payload;
            const requiredProduct = state.cartProducts.find((cProduct) => {
                return cProduct.id == productToBeAdded.id;
            });

            if (requiredProduct != undefined) {
                requiredProduct.indQuantity++;
            } else {
                // Not present in cart.
                productToBeAdded.indQuantity = 1;
                state.cartProducts.push(productToBeAdded);
            }
        },
        deleteFromCart: (state, action) => {
            const productToBeAdded = action.payload;
            const productIndex = state.cartProducts.findIndex((cProduct) => {
                return cProduct.id == productToBeAdded.id;
            });

            if (productIndex != -1) {
                state.cartQuantity--;
                let product = state.cartProducts[productIndex];
                if (product.indQuantity === 1) {
                    state.cartProducts.splice(productIndex, 1);
                } else {
                    product.indQuantity--;
                }
            }
        }
    }

});

export const action = cartSlice.actions;
export default cartSlice;
