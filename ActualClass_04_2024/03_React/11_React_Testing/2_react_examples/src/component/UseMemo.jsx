import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'


const UseMemoConcept = () => {
    const [ value, setValue ] = useState(0);

    const computeResult = (value) => {
        let futureTime = Date.now() + 2000;
        while (Date.now() < futureTime) {

        }

        return value * value;
    }

    const handleUserInput = (event) => {
        setValue(event.target.value);
    }

    const cacheResult = useMemo(() => computeResult(value), [value]);

    return (
        <>
            <input type="text" value={value} onChange={handleUserInput}></input>
            <div> Value: {value}</div>
            <div>Memoized Result: {cacheResult}</div>
        </>
    )
}

export default UseMemoConcept