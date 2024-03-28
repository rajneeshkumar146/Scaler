import userslice from "../UserSlice";
const action =userslice.actions;
export const fetchUserMiddleWare =  (param) => {
    return async (dispatch) => {
        // input state
        try {
            dispatch(action.userLoading());
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const user = await resp.json();
            console.log("user", user);
            dispatch(action.userData(user));
        } catch (err) {
            dispatch(action.userError());
        }
    }
}


