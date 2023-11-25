import { useState } from 'react'
import HandleAllToDo from './Components/Todo/HandleAllToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HandleAllToDo></HandleAllToDo>
  )
}

export default App
