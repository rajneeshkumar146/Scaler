// rfce
import React from 'react'
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";

function Routing() {
  return (
    <div style={{
      textAlign: 'center',
    }}>
      <h2>Routing Examples</h2>
      <nav>
        <ul>
          <li><Link to='/home'>Home Page</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/listing'>Listing</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path='/home/' element={<Home></Home>}></Route>
        <Route path='/about/*' element={<About></About>}></Route>
        <Route path="/abc" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path='/user/:id' element={<User isAdmin={true}></User>}></Route>
        <Route path='/listing/' element={<Listing></Listing>}></Route>
      </Routes>
    </div>
  )
}


/***
 * 1. link ->  it is done.
 * 2. template route / Dynamic Route -> Done
 * 3. redirect routes
 * 4. Nested Routes
 * 5. Custom Routes
 *    5.1 Private Routes
 *    5.2 Conditional
 */

function Home() {
  return <h3>I am Home page</h3>
}

function About() {
  return (
    <>
      <h3>I am About page</h3>
      <Routes>
        <Route path='company' element={<Company />}></Route>
        <Route path='founder' element={<Founder />}></Route>
      </Routes>
    </>
  );
}

function Company() {
  return <h3>We are a good firm.</h3>
}

function Founder() {
  return <h3>We are nice people.</h3>
}

function Listing() {
  return <h3>I am Listing page</h3>
}

function User(props) {
  // console.log(props)
  let params = useParams();
  let [user, setUser] = useState(null);
  console.log(params);
  // https://fakestoreapi.com/users/2

  useEffect(() => {
    (async function () {
      const response = await fetch(`https://fakestoreapi.com/users/${params.id}`);
      const userData = await response.json();
      console.log(userData);
      setUser(userData);
    })()
  }, []);


  return (<>
    {user === null ? <h3>...Loading</h3> : <>
      <h4>User Name: {user.username}</h4>
      <h4>Name: {user.name.firstname + " " + user.name.lastname}</h4>
      <h4>Phone: {user.phone}</h4>
      <h4>Email: {user.email}</h4>
      <h4>City: {user.address.city}</h4>
    </>}
  </>)
}

function PageNotFound() {
  return <h3>Page not found</h3>
}




export default Routing