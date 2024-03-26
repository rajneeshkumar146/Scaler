import {configureStore} from "@reduxjs/toolkit"
import CounterSlice from "./CounterSlice";

const store = configureStore({
    reducer: {
        counterState: CounterSlice.reducer
        todoSlice: ????
    }

});


export default store;