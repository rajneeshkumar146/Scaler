import React from 'react'
import { useReducer } from 'react';

function CountUseReducer() {
    const intitialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            case "+five":
                return state + 5;
            case "-five":
                return state - 5;
            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, intitialState);
    return (
        <>
            <div style={{ color: "white" }}>{count}</div>
            <button onClick={() => { dispatch("increment") }}>Increment</button>
            <button onClick={() => { dispatch("decrement") }}>Decrement</button>
            <button onClick={() => { dispatch("+five") }}>+Five</button>
            <button onClick={() => { dispatch("-five") }}>-Five</button>
        </>
    )
}

export default CountUseReducer