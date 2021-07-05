export const initialState = {
    todoList: [
    {item: 'Learn about reducers',
    completed: false,
    id: 3892987589}
    ]
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "SUBMIT_TODO":
            return {...state, 
                todoList: [...state.todoList, {
                    item: action.payload, completed: false, id: Date.now()}]}
        case 'CLEAR_COMPLETE':
            return {
                ...state, todoList: state.todoList.filter((todo) => !todo.completed)
            };
        case 'TOGGLE_COMPLETE': {
            return {
                ...state, todoList: state.todoList.map((todo) => (todo.id === action.payload 
                ? {...todo, completed: !todo.completed} : todo))
            }
        }
        default:
            return state;
    }
}