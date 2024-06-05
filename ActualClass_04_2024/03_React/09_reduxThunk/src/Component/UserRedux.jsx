import React, { useState } from 'react'
import UserSlilce from '../redux/UserSlilce';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserMiddleWare } from '../redux/MiddleWare/userMiddleWare';

function UserRedux() {
    const actions = UserSlilce.actions;
    const dispatch = useDispatch();

    const { user, isError, isLoading, param } = useSelector((store) => {
        return store.userState;
    })

    const [value, setValue] = useState();

    useEffect(function () {
        if (param != null) {
            dispatch(fetchUserMiddleWare(param));
        }
    }, [param]);

    const handleParams = () => {
        dispatch(actions.setParam(value));
    }

    const heading = <>
        <h2> User Example</h2>
        <input
            type="text"
            value={value}
            onChange={(event) => {
                setValue(event.target.value)
            }}></input>
        <button onClick={handleParams}>send params</button>
    </>

    if (isLoading) {
        return <>
            {heading}
            <h3>....Loading</h3>
        </>
    }

    if (isError) {
        return <>
            {heading}
            <h3>Error Occured</h3>
        </>
    }

    return (
        <>
            {heading}
            <h4>Name: {user.name} </h4>
            <h4> Phone: {user.phone}</h4>
        </>
    )
}

export default UserRedux