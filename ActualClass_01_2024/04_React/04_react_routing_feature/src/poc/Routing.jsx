import React from 'react'
import { Routes, Route, Link, useParams } from "react-router-dom";

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
        <Route path="/about/" element={<About></About>}></Route>
        <Route path="/about/*" element={<About></About>}></Route>
        <Route path="/user/:id" element={<User></User>}></Route>
      </Routes>
    </div>
  )
}

function Home() {
  return <h3>I am home</h3>
}

function User(props){
  let parms = useParams();
  console.log(parms);
  // https://fakestoreapi.com/users/${parms.id}
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

export default Routing
