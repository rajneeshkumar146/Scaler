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

            case "lastNameInput":

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
                value={formState.firstName} />
            ????
            <input
                type="text"
                className="firstName"
                value={formState.lastName} 
             ??????
            />
            <button>Rest all fields</button>

        </form>
    )
}

export default Form