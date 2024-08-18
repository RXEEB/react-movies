import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: [],
    },

    reducers: {

        setSearchMovie: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const { setSearchMovie } = searchSlice.actions;
export default searchSlice.reducer;