import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from '../slices/moviesSlice'
import movieReducer from '../slices/moviesSlice'
import searchReducer from '../slices/searchSlice'


export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
        search: searchReducer
    }
});
