import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { TMBD_API_KEY, TMBD_API_URL } from "../../constants";

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ page, language, sortBy }) => {
    const { data } = await axios.get(
        `${TMBD_API_URL}/3/discover/movie?page=${page}&sort_by=popularity.${sortBy}&language=${language}`,
        {
          headers: { Authorization: `Bearer ${TMBD_API_KEY}` },
        }
    );

    return data?.results;
})

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    isLoading: false,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies.length = 0;
      state.movies.push(...action?.payload);
    })
    // добавить случай, когда запрос в процессе загрузки
    // isLoading: false. Когда fetchMovies.pending, то isLoading = true, когда fullfilled, тогда isLoading = false
    .addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    })
  }
});
