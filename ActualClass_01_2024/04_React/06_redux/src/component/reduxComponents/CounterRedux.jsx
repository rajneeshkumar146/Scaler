import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '../../redux/counterSlice';

const actions = counterSlice.actions;
function CounterRedux() {

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

    return (
        <>
            <button onClick={handleIncrement}>+</button>
            <h3>{count}</h3>
            <button onClick={handleDecrement}>-</button>

        </>
    )
}

export default CounterRedux