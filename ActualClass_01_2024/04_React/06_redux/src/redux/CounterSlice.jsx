import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
    name: "countername",
    initialState: {
        count: 0
    },
    reducers: {
        // in that state -> intial state, you can declare any name like in my case it is 'state' 
        increment: (state) => {
            // console.log(state)
            state.count += 1;
        },
        decrement: (state) => {
            // console.log(state)
            state.count -= 1;
        }
    }
});

export default counterSlice;