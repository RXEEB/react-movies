import { createSlice } from "@reduxjs/toolkit";

const selectVideoSlice = createSlice({
    name: 'selectVideo',
    initialState: {
        selectVideo: '',
    },

    reducers: {

        setSelectVideo: (state, action) => {
            state.selectVideo = action.payload;
        },
    },
});

export const { setSelectVideo } = selectVideoSlice.actions;
export default selectVideoSlice.reducer;