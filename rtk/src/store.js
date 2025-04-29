import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './toolkit/counterSlice'


export const store = configureStore({
    reducer:counterReducer
})