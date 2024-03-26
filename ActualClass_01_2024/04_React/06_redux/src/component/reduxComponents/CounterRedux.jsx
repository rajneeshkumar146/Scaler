import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import CounterSlice from '../../redux/CounterSlice';

const actions = CounterSlice.actions;
function CounterRedux() {

    const count = useSelector((store) => {
        return store.counterState.count;
    })

    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(actions.increment())
    }

    const handleDecrement = () => {
        dispatch(actions.decrement())
    }
    return (
        <>
            <button onClick={handleIncrement}>+</button>
            <h3>{count}</h3>
            <button onClick={handleDecrement}>-</button>
        </>
    )
}

export default CounterRedux