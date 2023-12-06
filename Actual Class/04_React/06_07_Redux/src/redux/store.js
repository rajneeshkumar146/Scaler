import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import TodoSlice from "./TodoSlice";
import userSlice from "./userSlice";

// import thunkMiddleWare from "redux-thunk";

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        todoState: TodoSlice.reducer,
        userState: userSlice.reducer
    },
    // middleware: [thunkMiddleWare]
});


export default store;