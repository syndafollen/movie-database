import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./slices/favoritesSlice";
import { moviesSlice } from "./slices/moviesSlice";

export const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        movies: moviesSlice.reducer,
    }
})