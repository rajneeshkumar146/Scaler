import { configureStore } from "@reduxjs/toolkit"
import CounterSlice from "./CounterSlice";
import TodoSlice from "./TodoSlice";

const store = configureStore({
    reducer: {
        counterState: CounterSlice.reducer,
        todoSlice: TodoSlice.reducer
    }

});


export default store;