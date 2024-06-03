import React, { useState } from 'react'
import { useEffect } from 'react';

function User() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    // fetch('https://jsonplaceholder.typicode.com/users/1');
    useEffect(function () {
        (async function () {
            try {
                setLoading(true);
                const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const userRes = await resp.json();
                setUser(userRes);
            } catch(err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        })()
    }, []);

    const heading = <h2> User Example</h2>

    if (loading) {
        return <>
            {heading}
            <h3>...Loading</h3>
        </>
    }

    if (error) {
        return <>
            {heading}
            <h3>Error occcured</h3>
        </>
    }

    return (
        <>
            {heading}
            <h4> Name : {user.name} </h4>
            <h4> Phone : {user.phone} </h4>
        </>
    )
}

export default User