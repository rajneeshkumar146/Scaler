import React, { useState, useEffect } from 'react'

function GetData() {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            console.log("useEffect is Working");
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const user = await response.json();
            setData(user);
        }
        fetchData();
    }, []);


    return (
        <>{
            data === null ?
                <h2>Placeholder loading relevent data...</h2> :
                <>
                    <h1>data get loaded</h1>
                    <h2>Name: {data.name}</h2>
                    <h2>Email: {data.email}</h2>
                    <h2>Phone: {data.phone}</h2>
                </>
        }
        </>
    )
}

export default GetData

