import { useState } from 'react'
// import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  // You will never mutate the state variable -> make a copy of it.
  const [tasksArr, setTasks] = useState([]);

  const addTask = () => {
    const newTask = inputValue;
    let newTaskArr = [...tasksArr, newTask];
    setTasks(newTaskArr);
  }

  const handleUserInput = (event) => {
    setInputValue(event.target.value);
  }

  return (
    // react fragment.
    <>
      <div className='inputBox'>
        <input type="text" value={inputValue} onChange={handleUserInput} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        <ul>
          {tasksArr.map((task) => {
            return <li>{task}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
