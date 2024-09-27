import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from '../slices/moviesSlice'
import movieReducer from '../slices/moviesSlice'
import searchReducer from '../slices/searchSlice'
import selectVideoReducer from '../slices/selectvideoSlice'
import currentPageReducer from '../slices/currentPageSlice'



export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
        search: searchReducer,
        selectVideo: selectVideoReducer,
        currentPage: currentPageReducer,

    }
});
