import { configureStore } from "@reduxjs/toolkit";
import { authreducer } from "../features/authSlice";
import { cartReducer } from "../features/cartSlice";


export const store = configureStore({
    reducer : {
        auth : authreducer,
        cart : cartReducer
    }
})