import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from "./reducers/reducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const submitTodo = (newTodo) => {
    dispatch({ type: "SUBMIT_TODO", payload: newTodo });
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <h3>{state.item}</h3> */}
        <TodoForm submitTodo={submitTodo}/>
        <TodoList todoList={state.todoList}/>
      </header>
    </div>
  );
}

export default App;
