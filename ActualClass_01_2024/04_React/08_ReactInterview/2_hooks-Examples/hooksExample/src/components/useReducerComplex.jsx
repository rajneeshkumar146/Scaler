import React from 'react'
import { useReducer } from 'react';

function Form() {
  let intitialState = {
    firstName: "",
    lastName: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "firstNameInput":
        return { firstName: action.payload }
      case "lastNameInput":
        return { lastName: action.payload }
      case "clear":
        return {
          firstName: "",
          lastName: "",
        }
      default:
        return state;
    }
  }

  const [formState, dispatch] = useReducer(reducer, intitialState);
  return (
    <form>
      <input type="text" className='firstName' value={formState.firstName} onChange={(e) => {
        dispatch({ type: "firstNameInput", payload: e.target.value });
      }} />
      <input type="text" className='lastName' value={formState.lastName} onChange={(e) => {
        dispatch({ type: "lastNameInput", payload: e.target.value });
      }} />

      <button onClick={(e) => {
        e.preventDefault();
        dispatch({ type: "clear" })
      }} >Reset all Fields</button>

    </form>

  )
}

export default Form