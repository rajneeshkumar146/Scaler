import React from 'react'
import { useState } from 'react'

function Counter() {
    let [count, changeCount] = useState(0);
    let increment = () => {
        changeCount(count + 1);
    }

    let decrement = () => {
        changeCount(count - 1);
    }
    return (
        <div className='container'>
            <button onClick={decrement}>-</button>
            <p>Count: {count} </p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter