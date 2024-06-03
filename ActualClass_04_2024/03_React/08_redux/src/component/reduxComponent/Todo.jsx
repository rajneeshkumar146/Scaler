import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoSlice from '../../redux/TodoSlice';

function Todo() {

    const { value, todoList } = useSelector((store) => {
        return store.todoState;
    });

    const actions = TodoSlice.actions;
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const updatedValue = event.target.value;
        dispatch(actions.setValue(updatedValue));
    }

    const handleAddTask = () => {
        dispatch(actions.addTask(value));

    }

    return (
        <>
            <h2>Todo Application</h2>
            <div style={{ display: "flex" }}>
                <div className="inputBox">
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                    <button onClick={handleAddTask}>Submit</button>
                </div>
                <div className='list'>
                    <ul>
                        {
                            todoList.map((task, idx) => {
                                return <li key={idx}>{task}</li>
                            })
                        }
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Todo
