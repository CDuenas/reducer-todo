import React, { useReducer } from 'react';
import { initialState, todoReducer } from "./reducers/reducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const submitTodo = (newTodo) => {
    dispatch({ type: "SUBMIT_TODO", payload: newTodo });
  }

  const toggleComplete = (id) => dispatch({type: "TOGGLE_COMPLETE", payload: id})
  const clearCompleted = () => dispatch({type: 'CLEAR_COMPLETE'})



  return (
    <div className="App">
      <header className="App-header">
        <TodoForm submitTodo={submitTodo} clearCompleted={clearCompleted}/>
        <TodoList todoList={state.todoList} toggleComplete={toggleComplete}/>
      </header>
    </div>
  );
}

export default App;
