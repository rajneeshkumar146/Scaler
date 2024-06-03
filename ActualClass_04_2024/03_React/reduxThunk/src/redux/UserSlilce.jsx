import { createSlice } from '@reduxjs/toolkit'

const UserSlilce = createSlice({
    name: "userSlice",
    initialState: {
        user: "",
        isError: false,
        isLoading: true,
        param: null
    },
    reducers: {
        userLoading: (state) => {
            state.isError = false;
            state.isLoading = true;
        },
        useError: (state) => {
            state.isError = true;
            state.isLoading = false;
        },
        userData: (state, componentInfoObj) => {
            state.isLoading = false;
            state.user = componentInfoObj.payload;
        },
        setParam: (state, componentInfoObj) => {
            state.param = componentInfoObj.payload;
        }
    }
});

export default UserSlilce