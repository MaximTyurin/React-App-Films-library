import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "./cart/reduser";

export const store = configureStore({
    reducer: {
        cart: cartReduser,
    }
})