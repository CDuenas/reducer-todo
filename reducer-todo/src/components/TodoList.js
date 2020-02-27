import React from 'react';

function TodoList({ todoList }) {


    return (
        <div>
            {todoList.map(todo => 
                <div>
                    <h3>{todo.item}</h3>
                </div>
            )}
        </div>
    )
}

export default TodoList;