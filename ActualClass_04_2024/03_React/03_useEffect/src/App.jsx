import { useState } from 'react'
import HandleAllToDo from './components/todo/HandleAllToDo'
import GetData from './components/useEffectExamples/GetData'
import UseEffectExamples from './components/useEffectExamples/UseEffectExamples'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <HandleAllToDo />
    // <GetData></GetData>
    <UseEffectExamples></UseEffectExamples>
  )
}

export default App
