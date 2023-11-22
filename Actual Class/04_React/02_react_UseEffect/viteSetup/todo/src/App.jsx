import { useState } from 'react'
// import './App.css'

function App() {
    const [tasksArr, setTasks] = useState([]);

    const addTask = (inputValue) => {
        const newTask = inputValue;
        let newTaskArr = [...tasksArr, newTask];
        setTasks(newTaskArr);
    }

    return (
        // react fragment.
        <>
            <InputBox addTask={addTask}></InputBox>
            <List tasksArr={tasksArr}></List>
        </>
    )
}


function InputBox(props) {
    const [inputValue, setInputValue] = useState("")

    const handleUserInput = (event) => {
        setInputValue(event.target.value);
    }

    const addTaskToChild = () => {
        props.addTask(inputValue);
        setInputValue("");
    }

    return (
        <div className='inputBox'>
            <input type="text" value={inputValue} onChange={handleUserInput} />
            <button onClick={addTaskToChild}>Add Task</button>
        </div>
    );

}

function List(props) {
    return (<div className='list'>
        <ul>
            {props.tasksArr.map((task) => {
                return <li>{task}</li>
            })}
        </ul>
    </div>);
}

export default App
