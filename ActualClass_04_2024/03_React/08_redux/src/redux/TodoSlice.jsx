import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const TodoSlice = createSlice({
    name: "todoBox",
    initialState: {
        value : "",
        todoList: []
    },
    reducers: {
        setValue: (state, componentInfoObj) => {
            // console.log("hi: ", componentInfoObj)
            state.value = componentInfoObj.payload;
        },
        addTask: (state, componentInfoObj) => {
            const task = componentInfoObj.payload;
            let newtaskArr = [...state.todoList, task];
            state.todoList = newtaskArr;
            state.value = "";
        }
    }
});

export default TodoSlice
