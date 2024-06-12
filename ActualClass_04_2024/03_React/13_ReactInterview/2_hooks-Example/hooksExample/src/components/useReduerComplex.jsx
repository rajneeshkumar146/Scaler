import React from 'react'
import { useReducer } from 'react';

function Form() {
    const intitialState = {
        firstName: "",
        lastName: ""
    }
    const reducer = (state, action) => {
        switch (action) {
            case "firstNameInput":
                return { firstName: action.payload }
            case "lastNameInput":
                return { lastName: action.payload }
            case "clear":
                return {
                    firstName: "",
                    lastName: ""
                }
            default:
                return state;
        }
    }

    const [formState, dispatch] = useReducer(reducer, intitialState);

    return (
        <form>
            <input
                type="text"
                className="firstName"
                value={formState.firstName}
                onChange={(event) => {
                    dispatch({ type: "firstNameInput", payload: event.target.value })
                }}
            />
            <input
                type="text"
                className="firstName"
                value={formState.lastName}
                onChange={(event) => {
                    dispatch({ type: "lastNameInput", payload: event.target.value })
                }}
            />
            <button onClick={(event) => {
                event.preventDefault();    // optional
                dispatch({ type: "clear" })
            }}>Rest all fields</button>

        </form >
    )
}

export default Form