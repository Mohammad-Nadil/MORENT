import { configureStore } from "@reduxjs/toolkit";
import rentReducer from "../features/rent/rentSlice.js";

export const store = configureStore({
    reducer: {
        rent :  rentReducer
    }
})