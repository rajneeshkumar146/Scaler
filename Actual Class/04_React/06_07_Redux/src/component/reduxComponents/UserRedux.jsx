import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../../redux/userSlice';

const actions = counterSlice.actions;
function UserRedux() {

    const count = useSelector((store) => {
        return store.counterState.count;
    });

    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(actions.increment())
    }

    const handleDecrement = () => {
        // console.log(actions)
        dispatch(actions.decrement())
    }

    const heading = <h2> User Example</h2>

    if (loading) {
        return <>
            {heading}
            <h3>...Loading</h3>
        </>
    }

    if (error) {
        return <>
            {heading}
            <h3>Error occcured</h3>
        </>
    }

    return (
        <>
            {heading}
            <h4> Name : {user.name} </h4>
            <h4> Phone : {user.phone} </h4>
        </>
    )
}

export default UserRedux