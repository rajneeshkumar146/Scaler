import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import UserSlilce from "./UserSlilce";

const store = configureStore({
    reducer: {
        todoState: TodoSlice.reducer,
        userState: UserSlilce.reducer
    }
});

export default store;