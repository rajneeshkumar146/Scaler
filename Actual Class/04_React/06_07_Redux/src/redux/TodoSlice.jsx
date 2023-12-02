import { createSlice } from '@reduxjs/toolkit'
const TodoSlice = createSlice({
    name: "toolbox",
    initialState: {
        value: "",
        todoList: []
    },
    reducers:{
        setValue:(state, componentInfoObj) => {
            // console.log("I am set value", componentInfoObj)
            state.value = componentInfoObj.payload;
        },
        addTask: (state,componentInfoObj) => {
            // console.log("I am add task", componentInfoObj)
            const task = componentInfoObj.payload;
            let newTaskArr = [...state.todoList,task];
            state.todoList = newTaskArr;
            state.value = "";
        }
    }
});

export default TodoSlice;