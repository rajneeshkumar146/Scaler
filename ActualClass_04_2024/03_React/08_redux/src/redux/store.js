import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import TodoSlice from "./TodoSlice";
import userSlice from "./userSlice";

// import thunkMiddleware from 'redux-thunk'

import { applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        todoState: TodoSlice.reducer,
        userState: userSlice.reducer
    }
}, applyMiddleware(thunk));

export default store;