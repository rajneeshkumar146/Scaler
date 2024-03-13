import React from 'react'
import ReactDOM from 'react-dom/client'
import AddTask_olderVersion from './AddTask_olderVersion.jsx'
import AddTask_betterVersion from './AddTask_betterVersion.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AddTask_betterVersion />
  </React.StrictMode>,
)
