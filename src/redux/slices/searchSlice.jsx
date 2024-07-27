import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: '',

    reducers: {
        setSearchMovie: (state, action) => {
            state = action.payload;
        },
    },
});

export const { setSearchMovie } = searchSlice.actions;
export default searchSlice.reducer;