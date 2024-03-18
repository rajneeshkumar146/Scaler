import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";

function Routing() {
  return (
    <div style={
      {
        textAlign: 'center'
      }
    }>
      <h2>Roting Examples</h2>
      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/home/" element={<Home></Home>}></Route>
        <Route path="/house/" element={<Navigate to="/home" />}></Route>
        <Route path="/about/*" element={<About></About>}></Route>
        <Route path="/user/:id" element={<User></User>}></Route>
      </Routes>
    </div>
  )
}

function Home() {
  return <h3>I am home</h3>
}

function User(props) {
  let parms = useParams();
  // console.log(parms);
  // https://fakestoreapi.com/users/${parms.id}

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async function () {
      const response = await fetch(`https://fakestoreapi.com/users/${parms.id}`);
      const userData = await response.json();

      setUser(userData);
    })();
  }, []);


  return (
    <>
      {
        user === null ?
          <h3>....Loading</h3> :
          <>
            <h4>User Name: {user.username}</h4>
            <h4>User Email: {user.email}</h4>
            <h4>User Phone Number: {user.phone}</h4>
          </>

      }

    </>
  )


}

function About() {
  return (
    <>
      <h3>I am about page</h3>
      <ul>
        <li><Link to='/about/company'>Company</Link></li>
        <li><Link to='/about/founder'>Founder</Link></li>
      </ul>
      <Routes>
        <Route path="/company/" element={<Company></Company>}></Route>
        <Route path="/founder/" element={<Founder></Founder>}></Route>
      </Routes>
    </>
  )
}

function PageNotFound() {
  return <h3>Page Not Found</h3>
}

function Company() {
  return <h3>We are a good firm</h3>

}

function Founder() {
  return <h3>We are nice people, please invest in our company.</h3>
}

/***
 * 1. link ->  it is done.
 * 2. template route / Dynamic Route -> Done
 * 3. redirect routes
 * 4. Nested Routes
 * 
 */

export default Routing
