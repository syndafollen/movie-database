import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action?.payload);
    },
    remove: (state, action) => {
      const movieId = action.payload;
      const index = state.findIndex((movie) => movie?.id === movieId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

console.log("favoritesSlice:", favoritesSlice);

export const { add, remove } = favoritesSlice.actions;
