import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        movie: JSON.parse(localStorage.getItem('selectedMovie')) || {},

    },

    reducers: {
        setSelectedMovie: (state, action) => {
            state.movie = action.payload;
            localStorage.setItem('selectedMovie', JSON.stringify(action.payload));
        },
        setMovies: (state, action) => {
            state.movies = action.payload;

        },

    },
});

export const { setSelectedMovie, setMovies, } = moviesSlice.actions;
export default moviesSlice.reducer;