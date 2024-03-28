import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserMiddleWare } from '../../redux/middleWare/userMiddleWare';
import UserSlice from '../../redux/UserSlice';

const action = UserSlice.actions;
function UserRedux() {
    const { user, loading, error, param } = useSelector((store) => {
        return store.userState;
    })
    // https://jsonplaceholder.typicode.com/users/1

    const [value, setValue] = useState();
    const dispatch = useDispatch();
    useEffect(function () {
        if (param != null) {
            dispatch(fetchUserMiddleWare(param));
        }
    }, [param]);

    const handleParam = () => {
        dispatch(action.getParam(value));
    }

    const heading =
        <>
            <h2> User Example </h2>
            <input type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }} />
            <button onClick={handleParam}> send param</button>
        </>


    if (loading) {
        return <>
            {heading}
            <h3>...Loading</h3>
        </>
    }

    if (error) {
        return <>
            {heading}
            <h3>Error occurred</h3>
        </>
    }

    return <>
        {heading}
        <h4>Name: {user.name}</h4>
        <h4>User Name: {user.username}</h4>
        <h4>Email Id: {user.email}</h4>
        <h4>Phone Number: {user.phone}</h4>
    </>
}

export default UserRedux
