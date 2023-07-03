import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addCart: (state, action) => {
            const ProductsInCart = state.cart.find((product)=> product.id === action.payload.id);
            ProductsInCart ? state : state.cart.push(action.payload)
        },
        removeItem: (state, action) => {
            const remove = state.cart.filter((product) => product.id !== action.payload.id);
            state.cart = remove;
        },
        clearCart: (state) =>{
            return{
                ...state,
                cart: []
            }
        }
    }
});

export const {addCart, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;