import React from 'react'
import { useState } from 'react'
import InputBox from './InputBox';
import List from './List';

function HandleAllToDo() {
    const [taskArr, setTasks] = useState([]);

    const addTaskItem = (taskItem) => {
        let newTaskArray = [...taskArr, taskItem];
        setTasks(newTaskArray);
    }

    const handleDeleteTaskItem = (taskItemIdx) => {
        const filteredTaskItem = taskArr.filter((task, cidx) => {
            return cidx != taskItemIdx;
        });

        setTasks(filteredTaskItem);
    }

    return (
        <>
            <InputBox addTaskItem={addTaskItem}></InputBox>
            <List taskArr={taskArr} handleDeleteTaskItem={handleDeleteTaskItem}></List>
        </>
    );

}

export default HandleAllToDo