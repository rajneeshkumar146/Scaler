import { useState } from 'react'
import HandleAllToDo from './Components/Todo/HandleAllToDo'
import GetData from './Components/useEffectExamples/GetData'
import UseEffectCleanupExamples from './Components/useEffectExamples/UseEffectCleanupExamples'
import UseEffectExamples from './Components/useEffectExamples/useEffectExamples'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <HandleAllToDo></HandleAllToDo>
    // <GetData></GetData>
    // <UseEffectExamples></UseEffectExamples>
    <UseEffectCleanupExamples></UseEffectCleanupExamples>
  )
}

export default App
