import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AddTask_betterVersion() {
    const [taskArr, setTasks] = useState([])

    const addTask = (inputValue) => {
        const newTask = inputValue;
        let newTaskArr = [...taskArr, newTask]
        setTasks(newTaskArr);
    }

    return (
        <>
            <InputBox addTask={addTask}></InputBox>
            <List taskArr={taskArr}></List>
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


    return (<div className="inputBox">
        <input type="text" value={inputValue} onChange={handleUserInput}></input>
        <button onClick={addTaskToChild}>Add task</button>
    </div>);

}

function List(props) {
    return (<div className="list">
        <ul>
            {
                props.taskArr.map((task) => {
                    return <li>{task}</li>
                })
            }
        </ul>
    </div>)
}

export default AddTask_betterVersion
