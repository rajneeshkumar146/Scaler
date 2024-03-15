import React, {useState} from 'react'

function InputBox(addListItemCallbackFunction) {
    const [inputValue, setInputValue] = useState("");


    const handleInput = (event) => {
        setInputValue(event.target.value);
    }

    const addTaskChild = () => {
        addListItemCallbackFunction.addListItem(inputValue);
        setInputValue("");
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