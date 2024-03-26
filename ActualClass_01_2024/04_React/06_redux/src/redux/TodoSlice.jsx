import { createSlice } from '@reduxjs/toolkit'
const TodoSlice = createSlice({
    name: "toolBox",
    initialState: {
        value: "",
        todoList: []
    },
    reducers: {
        setValue: (state, componentInfoObj) => {
            state.value = componentInfoObj.payload;
        },
        addTask: (state, componentInfoObj) => {
            const task = componentInfoObj.payload;
            let newTaskArr = [...state.todoList, task];
            state.todoList = newTaskArr;
            state.value = "";
        }
    }
});

export default TodoSlice
