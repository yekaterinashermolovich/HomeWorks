import {createSlice } from "@reduxjs/toolkit";


export const stepSlice = createSlice({
    name: 'counterStep',
    initialState: 1,
    reducers: {
        increment: state => state + 1,
        decrement: state => Math.max(1, state - 1)
    }
});


export const {increment, decrement}  = stepSlice.actions;


export default stepSlice.reducer;