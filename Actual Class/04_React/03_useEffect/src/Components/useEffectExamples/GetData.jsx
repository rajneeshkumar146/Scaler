import React, { useState, useEffect } from 'react'

function GetData() {
    const [data, setData] = useState(null);

    console.log("position 1");

    // function fn() {
    //     async function fetchData() {
    //         console.log("Use-Effect is working");
    //         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    //         const user = await response.json();
    //         setData(user);
    //     }

    //     fetchData();
    // }
    useEffect(() => {
        async function fetchData() {
            console.log("Use-Effect is working");
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const user = await response.json();
            setData(user);
        }

        fetchData();
    }, []);

    console.log("position 2");
    return (
        <>
            {
                data === null ?
                    <h2>Placeholder loading relevent data...</h2> :
                    <>
                        <h1>Data loaded</h1>
                        <h2>Name : {data.name}</h2>
                        <h2>Email : {data.email}</h2>
                        <h2>username : {data.username}</h2>

                    </>
            }
        </>

    )
}

export default GetData