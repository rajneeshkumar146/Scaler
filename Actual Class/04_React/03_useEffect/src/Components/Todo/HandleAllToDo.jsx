// rfce
import React, { useState } from 'react'
import InputBox from './InputBox';
import List from './List';

function HandleAllToDo() {
    const [taskArr, setTasks] = useState([]);

    const addTaskItem = (taskItem) => {
        let newtaskArray = [...taskArr, taskItem];
        setTasks(newtaskArray);
    }

    return (
        <>
            <InputBox addTaskItem={addTaskItem}></InputBox>
            <List taskArr={taskArr} ></List>
        </>
    )
}

export default HandleAllToDo