import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        movie: JSON.parse(sessionStorage.getItem('selectedMovie')) || {},


    },

    reducers: {
        setSelectedMovie: (state, action) => {
            state.movie = action.payload;
            sessionStorage.setItem('selectedMovie', JSON.stringify(action.payload));
        },
        addMovies: (state, action) => {
            state.movies = [...state.movies, ...action.payload];


        },
        clearMovies: (state) => {
            state.movies = [];
        },

    },
});

export const { setSelectedMovie, addMovies, clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;