import React, { useState } from 'react'
import UserSlilce from '../redux/UserSlilce';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function UserRedux() {
    const actions = UserSlilce.actions;
    const dispatch = useDispatch();

    const { user, isError, isLoading, param } = useSelector((store) => {
        return store.userState;
    })

    const [value, setValue] = useState();

    useEffect(function () {
        if (param != null) {
            (async function () {
                try {
                    dispatch(actions.userLoading());
                    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
                    const userRes = await resp.json();
                    dispatch(actions.userData(userRes));
                } catch (err) {
                    dispatch(actions.useError());
                }
            })()
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