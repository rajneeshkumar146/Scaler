import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AddTask_olderVersion() {

  const [inputValue, setInputValue] = useState("");
  const [taskArr, setTasks] = useState([])

  const handleUserInput = (event) => {
    setInputValue(event.target.value);
  }

  const addTask = () => {
    const newTask = inputValue;
    let newTaskArr = [...taskArr, newTask]
    setTasks(newTaskArr);
  }

  return (
    <>
      <div className="inputBox">
        <input type="text" value={inputValue} onChange={handleUserInput}></input>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="list">
        <ul>
          {
            taskArr.map((task) => {
              return <li>{task}</li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default AddTask_olderVersion
