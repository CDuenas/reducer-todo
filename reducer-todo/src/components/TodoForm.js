import React, { useState, useReducer } from "react";
import {initialState, todoReducer } from "../reducers/reducer";

const TodoForm = ({ submitTodo }) => {

    const [newTodo, setNewToDo] = useState("");


    
    const handleChanges = e => {
        e.preventDefault();

        setNewToDo(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        submitTodo(newTodo)
        setNewToDo("")
    }



    return (
        <form onSubmit={handleSubmit} >
            <input type="text" name="todo" onChange={handleChanges} value={newTodo} />
            <button type="submit">Add ToDo</button>
        </form>
    )
}

export default TodoForm;