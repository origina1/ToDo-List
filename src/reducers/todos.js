const initialState = {
    text: '',
    todos: [],
    counter: 0,
    filterType: 'SHOW_ALL'
};

export default function (state = initialState, action) {
    if (action.type === "SAVE_INPUT_TEXT") {
        return {
            ...state,
            text: action.payload.text
        };
    } else if (action.type === "TASK_ADD") {
        const arr = state.todos.concat(action.payload);
        return {
            ...state,
            text: "",
            todos: arr,
            counter: action.payload.id
        };
    } else if (action.type === "TASK_DELETE") {
        const arr = state.todos.filter((item) => {
            return +action.payload.id !== item.id;
        });
        return {
            ...state,
            text: "",
            todos: arr,
        };
    } else if (action.type === "CHANGE_TASK_STATUS") {
        const arr = state.todos.map((item) => {
            if (+action.payload.id === item.id) {
                return {
                    ...item,
                    status: !action.payload.status, 
                }
            } else return item;
        });
        return {
            ...state,
            todos: arr,
        };
    } else if (action.type === 'SET_FILTER') {
        return {
            ...state,
            filterType: action.payload
        }
    } return state;
}