import { useState } from 'react'

function App() {
  const [taskArr, setTasks] = useState([]);

  const addTask = (inputValue) => {
    const newTask = inputValue;
    let newtaskArr = [...taskArr, newTask];
    setTasks(newtaskArr);
  }

  return (
    // react fragment
    <>
      <InputBox addTask={addTask}></InputBox>
      <AddItemsToList tasksArr={taskArr}></AddItemsToList>
    </>
  )
}

function InputBox(props) {
  const [inputValue, setInputValue] = useState("");

  const handleUserInput = (event) => {
    setInputValue(event.target.value);
  }

  const addTaskToChild = () => {
    props.addTask(inputValue);
    setInputValue("");
  }



  return (
    <div className="inputBox">
      <input type="text" value={inputValue} onChange={handleUserInput}></input>
      <button onClick={addTaskToChild}>Add Task</button>
    </div>
  );
}

function AddItemsToList(props) {
  return (
    <div className="list">
      <ul>
        {props.tasksArr.map((task) => {
          return <li>{task}</li>
        })}
      </ul>
    </div>
  );
}

export default App
