import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TodoSlice from '../../redux/TodoSlice';

const actions = TodoSlice.actions;
function TodoRedux() {
    const {value, todoList} = useSelector((store) => {
        return store.todoState;
    });

    const dispatch = useDispatch();
    const handleChange = (e) => {
        const updatedValue = e.target.value;
        dispatch(actions.setValue(updatedValue));
    }

    const handleAddTask = () => {
        dispatch(actions.addTask(value));
    }

    return (
        <>
            <h2>TODO Application</h2>
            <div style={{ display: "flex" }}>
                <div className='inputBox'>
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                    <button onClick={handleAddTask}>Submit</button>
                </div>
                <div className="list">
                    <ul>
                        {todoList.map((task, idx) => {
                            return <li key={idx}>{task}</li>
                        })}
                    </ul>
                </div>
            </div>


        </>
    )
}

export default TodoRedux