import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { BrowserRouter } from "react-router-dom";
import Routing from './poc/Routing.jsx'
import Context from './poc/contextApi/Context.jsx';
import ThemeManager from './poc/contextApi/themes/ThemeManager.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routing></Routing> */}
      <App />
      {/* <Context /> */}
      {/* <ThemeManager /> */}
    </BrowserRouter>

  </React.StrictMode>,
)
