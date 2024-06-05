import logo from './logo.svg';
import './App.css';
import posts from "./posts.js"
import { useState } from 'react';

function App() {
  const [visibility, setVisibility] = useState("none");
  const handleClick = () => {
    if (visibility == "none") {
      setVisibility("block");
    } else {
      setVisibility("none");
    }
  }

  return (
    <>
      <h1>I am app</h1>
      <button onClick={handleClick}>Add Image</button>
      <ul style={{ display: visibility }}>{
        posts.map((post, idx) => {
          return <p key={idx}>{JSON.stringify(post)}</p>
        })
      }</ul>
    </>

  );
}

export default App;
