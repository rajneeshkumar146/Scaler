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

    const handleDeleteTaskItem = (taskItemIdx) => {
        const fileterdTaskItems = taskArr.filter((task, cidx) => {
            return cidx != taskItemIdx;
        });

        console.log("That task is going to be deleted: " + task)
        setTasks(fileterdTaskItems);
    }

    return (
        <>
            <InputBox addTaskItem={addTaskItem}></InputBox>
            <List taskArr={taskArr} handleDeleteTaskItem={handleDeleteTaskItem} ></List>
        </>
    )
}

export default HandleAllToDo