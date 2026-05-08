import { configureStore } from "@reduxjs/toolkit";
import rentReducer from "../services/features/rent/rentSlice.js";

export const store = configureStore({
    reducer: {
        rent :  rentReducer
    }
})