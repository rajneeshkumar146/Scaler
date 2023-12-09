import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setInterval(() => {
            // It is always better to use useState with cb when you are updating with the help of pervious state value.
            // setCount(count + 1);
            setCount((count) => { return count + 1 });
        }, 1000);
    }

    console.log("Count" + count);

    return (
        <>
            <h3>{count}</h3>
            <button onClick={handleCount}>Increment</button>
        </>
    )
}

export default Counter