import React from 'react'
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserMiddleWare } from '../../redux/middleWare/userMiddleWare';
import userSlice from '../../redux/userSlice';

const actions = userSlice.actions;
function UserRedux() {

    const { loading, error, user, param} = useSelector((store) => {
        return store.userState;
    });

    const [value, setValue] = useState();

    const dispatch = useDispatch();
    useEffect(function () {
        if (param != null) {
            dispatch(fetchUserMiddleWare(param));
        }
    },[]);

    const handleParams = () => {
        dispatch(actions.setParam(value));
    }

    const heading = <>

        <h2> User Example</h2>
        <input
            type="text"
            value={value}
            onChange={(e) => { setValue(e.target.value) }}>
        </input>
        <button onClick={handleParams}> Send Params</button>
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