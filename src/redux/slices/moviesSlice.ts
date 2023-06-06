import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_KEY, URL } from "../../constants";

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ page, language, sortBy }) => {
    const response = await axios.get(
        `${URL}/3/discover/movie?page=${page}&sort_by=popularity.${sortBy}&language=${language}`,
        {
          headers: { Authorization: `Bearer ${API_KEY}` },
        }
    );

    return response?.data;
})

export const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
  },
});
