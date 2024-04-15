import React, { useMemo } from 'react'

const UseMemoConcept = ({ value }) => {

    const computeResult = () => {
        let futureTime = Date.now() + 1000;
        while (Date.now() < futureTime) {

        }
        return value * value;
    }

    // const result = computeResult(value);

    const cacheResult = useMemo(function () {
        return computeResult(value);
    }, [value]);

    return (
        <>
            <div>Value: {value}</div>
            <div>Memoized value: {cacheResult}</div>
        </>
    )
}

export default UseMemoConcept