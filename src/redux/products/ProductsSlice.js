import { createSlice } from "@reduxjs/toolkit";
import { ProductsByCat, TotalProducts } from "../../components/data/products";

const INITIAL_STATE = {
    products: ProductsByCat,
    total: TotalProducts,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: (state) => {
            return state
        },
        
    }
})


export const {getProducts} = productsSlice.actions;

export default productsSlice.reducer;