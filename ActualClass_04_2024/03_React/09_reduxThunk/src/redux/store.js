import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import UserSlilce from "./UserSlilce";

import {applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';


const store = configureStore({
    reducer: {
        todoState: TodoSlice.reducer,
        userState: UserSlilce.reducer
    }
},applyMiddleware(thunk));

export default store;