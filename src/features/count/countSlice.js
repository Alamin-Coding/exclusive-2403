import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
        count: 0
    }
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: function(state, action) {
            state.count =  state.count + 1
        },
        incrementByValue: function(state, action) {
            state.count = state.count+action.payload
        },
        decrement: function(state) {
            state.count-1
        },
    }
});

export const {increment, incrementByValue, decrement} = counterSlice.actions;

export default counterSlice.reducer;

