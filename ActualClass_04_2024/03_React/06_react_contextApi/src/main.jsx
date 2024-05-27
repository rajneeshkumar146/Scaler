import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { BrowserRouter } from "react-router-dom"
import Routing from './poc/Routing.jsx'
import Context from './poc/ContextApi/Context.jsx'
import ThemeManager from './poc/ContextApi/themes/ThemeManager.jsx'


// npm i react-router-dom
// link: https://www.npmjs.com/package/react-router-dom
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <Routing /> */}
      {/* <Context /> */}
      <ThemeManager />
    </BrowserRouter>
  </React.StrictMode>,
)
