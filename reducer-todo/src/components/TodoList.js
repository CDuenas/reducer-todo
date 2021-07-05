import React from 'react';
import Todo from './Todo';

function TodoList({ todoList, toggleComplete }) {


    return (
        <div>
            <ul>
                {todoList.map(todo => {
                    return <Todo key={todo.id} toggleComplete={toggleComplete} todo={todo}/>
                })}
            </ul>
        </div>
    )
}

export default TodoList;