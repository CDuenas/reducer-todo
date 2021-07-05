import React from 'react';
import './Todo.css';

function Todo({ todo, toggleComplete}) {
    return (
        <li className={todo.completed ? 'completed' : ''} onClick={() => toggleComplete(todo.id)}>{todo.item} </li>
    )
}

export default Todo;