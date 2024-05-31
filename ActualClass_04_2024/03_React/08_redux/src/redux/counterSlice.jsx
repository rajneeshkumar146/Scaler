import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: "counterName",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            // console.log("in: ", state);
            state.count += 1;

        },
        decrement: (state) => {
            // console.log("de: ", state);
            state.count -= 1;
        }
    }
});


export default counterSlice;