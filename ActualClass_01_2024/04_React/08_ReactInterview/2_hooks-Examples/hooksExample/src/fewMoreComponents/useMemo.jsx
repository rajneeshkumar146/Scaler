import React from 'react'
import { useMemo } from 'react';

const UseMemoConcept = ({ value }) => {
    const computeResult = () => {
        let futureTime = Date.now() + 1000;
        while (Date.now() < futureTime) {

        }

        return value * value;
    }

    // const result = computeResult(value);

    const cachedResult = useMemo(function () {
        return computeResult(value);
    }, [value]);
    
    return (
        <>
            <div>Value: {value}</div>
            <div>Memoized Value: {cachedResult}</div>
        </>
    )
}

export default useMemo