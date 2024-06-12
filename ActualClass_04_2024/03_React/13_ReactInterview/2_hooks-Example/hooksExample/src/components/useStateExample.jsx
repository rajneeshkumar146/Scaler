import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setInterval(() => {
            console.log(count);
            setCount((count) => {
                return count + 1;
            });
        }, 1000);

    }


    return (
        <>

            <h3>{count}</h3>
            <button onClick={handleCount}>Start</button>

        </>
    )
}

export default Counter