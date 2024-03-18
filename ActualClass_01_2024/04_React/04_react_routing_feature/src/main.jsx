import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { BrowserRouter } from "react-router-dom";
import Routing from './poc/Routing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routing></Routing> */}
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)
