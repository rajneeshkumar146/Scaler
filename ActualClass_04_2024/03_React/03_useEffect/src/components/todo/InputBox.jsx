import React from 'react'
import { useState } from 'react'

function InputBox(props) {
    const [inputValue, setValue] = useState("");

    const handleInput = (e) => {
        setValue(e.target.value);
    }

    const addTaskChild = () => {
        props.addTaskItem(inputValue);
        setValue("");
    }

    return (
        <>
            <div className="inputBox">
                <input type="text" value={inputValue} onChange={handleInput}></input>
                <button onClick={addTaskChild}>Add Task</button>
            </div>
        </>
    )
}

export default InputBox