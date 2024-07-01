import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSlice";
import userReducer from "./userSlice";

const store = configureStore({
    reducer: {
        loaders: loaderReducer,
        users: userReducer,
    }
});

export default store;