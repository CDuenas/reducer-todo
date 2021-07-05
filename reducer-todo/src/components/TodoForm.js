import React, { useState, useReducer } from "react";
import {initialState, todoReducer } from "../reducers/reducer";

const TodoForm = ({ submitTodo, clearCompleted }) => {

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

    const clearCompleteHandler = (e) => {
        e.preventDefault();
        clearCompleted();
    };



    return (
        <form onSubmit={handleSubmit} >
            <input type="text" name="todo" onChange={handleChanges} value={newTodo} />
            <button type="submit">Add ToDo</button>
            <button onClick={(e) => clearCompleteHandler(e)}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;