import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slice/productSlice'
import wishlistSlice from './Slice/wishListSlice'
import cartSlice from './Slice/cartSlice'

const cartStore = configureStore({
    reducer:{
        productReducer:productSlice,
        wishListReducer:wishlistSlice,
        cartReducer:cartSlice
    }
})


export default cartStore