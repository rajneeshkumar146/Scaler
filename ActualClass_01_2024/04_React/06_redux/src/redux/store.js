import { configureStore } from "@reduxjs/toolkit"
import CounterSlice from "./CounterSlice";
import TodoSlice from "./TodoSlice";
import UserSlice from "./UserSlice";
import thunkMiddleWare from "redux-thunk";
const store = configureStore({
    reducer: {
        counterState: CounterSlice.reducer,
        todoSlice: TodoSlice.reducer,
        userState: UserSlice.reducer
    },
    middleware: [thunkMiddleWare]
});


export default store;