import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'

function Routing() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Routing Example</h2>
            <nav>
                <li><Link to='/home'>Home Page</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/listing'>Listing</Link></li>
            </nav>
            <Routes>
                <Route path="*" element={<PageNotFound />}></Route>
                <Route path='/home/' element={<Home />}></Route>
                <Route path='/house/' element={<Navigate to='/home' />}></Route>
                <Route path='/about/*' element={<About />}></Route>
                <Route path='/listing/' element={<Listing />}></Route>
                <Route path='/user/:id/' element={<User isAdmin={true} />}></Route>

            </Routes>
        </div>
    )
}

/***
 * 1. link ->  it is done.
 * 2. template route / Dynamic Route -> Done
 * 3. redirect routes   -> Navigate
 * 4. Nested Routes
 * 5. Custom Routes
 *    5.1 Private Routes
 *    5.2 Conditional
 */

function Home() {
    return <h3>I am home</h3>
}

function About() {
    return (
        <>
            <h3>I am About Page</h3>
            <nav>
                <li><Link to='company'>Company Page</Link></li>
                <li><Link to='founder'>Founder Page</Link></li>
            </nav>
            <Routes>
                <Route path="/company/" element={< Company />}></Route>
                <Route path="/founder/" element={< Founder />}></Route>
            </Routes>

        </>
    )
}

function Company() {
    return <h3>We are a good firm</h3>
}

function Founder() {
    return <h3>We are nice people!. please fund us.</h3>
}

function Listing() {
    return <h3>I am Listing page</h3>
}

function PageNotFound() {
    return <h3>Page Not Found!</h3>
}

function User(props) {
    let params = useParams();
    let [user, setUser] = useState();

    useEffect(() => {
        (async function fetchData() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            const userData = await response.json();
            setUser(userData);
        })();
    }, []);

    return (<>
        {
            user == null ? <h2>...Loading</h2> :
                <>
                    <h2>Data Loaded</h2>
                    <h4>Name: {user.name}</h4>
                    <h4>Email: {user.email}</h4>
                    <h4>UserName: {user.username}</h4>
                    <h4>Phone; {user.phone}</h4>
                </>

        }
    </>);
}

export default Routing