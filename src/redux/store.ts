import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./slices/favoritesSlice";

export const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
    }
})