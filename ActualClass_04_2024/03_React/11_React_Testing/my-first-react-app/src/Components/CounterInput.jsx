import React, { useState } from "react";
function InputCounter() {
    const [count, changeCount] = useState(0);
    const [value, setValue] = useState("");
    const increment = () => {
        changeCount(count + 1);
    }
    const decrement = () => {
        changeCount(count - 1);
    }
    const updateInput = (e) => {
        setValue(e.target.value);
    }
    const resetCounter = () => {
        changeCount(Number(value));
        setValue("");
    }
    return (
        <div className="container">
            <div className="container">
                <input type="text" value={value} onChange={updateInput} />
                <button onClick={resetCounter}>Reset</button>
            </div>
            <br />
            <div className="container">
                <button onClick={increment}>+</button>
                <p>Counter Number  Count :  {count}</p>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )
}
export default InputCounter
