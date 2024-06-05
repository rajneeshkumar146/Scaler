import UserSlilce from "../UserSlilce";

const actions = UserSlilce.actions;
export const fetchUserMiddleWare = (param) => {
    return async function (dispatch) {
        try {
            dispatch(actions.userLoading());
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const userRes = await resp.json();
            dispatch(actions.userData(userRes));
        } catch (err) {
            dispatch(actions.useError());
        }
    }
}



