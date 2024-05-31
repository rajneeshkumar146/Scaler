import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '../../redux/counterSlice';

function CounterRedux() {
    const count = useSelector((store) => {
        return store.counterState.count;
    })

    const actions = counterSlice.actions;
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(actions.increment());
    }

    const handleDecrement = () => {
        dispatch(actions.decrement());
    }

    console.log("hi");

    return (
        <>
            <button onClick={handleIncrement}>+</button>
            <h3>{count}</h3>
            <button onClick={handleDecrement}>-</button>
        </>
    )
}

export default CounterRedux