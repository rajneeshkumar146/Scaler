import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/useStateExample'
import CounterUseReducer from './components/useReducer'
import Form from './components/useReducerComplex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Use State Example</h2>
      {/* <Counter></Counter> */}
      {/* <CounterUseReducer></CounterUseReducer> */}
      <Form></Form>
    </>
  )
}

export default App
