import React, { useState } from "react";
function Counter() {
    let [count, changeCount] = useState(0);
    let increment = () => {
        changeCount(count + 1);
    }
    let decrement = () => {
        changeCount(count - 1);
    }
    return (
        <div className="container">
            <button onClick={increment}>+</button>
            <p>Count {count}</p>
            <button onClick={decrement}>-</button>
        </div>
    )
}


export default Counter;