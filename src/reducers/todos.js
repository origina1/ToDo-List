const initialState = {
    text: '',
    todos: [],
    counter: 0
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
            text: "",
            todos: arr
        };
    } else if (action.type === "TASK_DELETE") {
        console.log('привет из reducer TASK_DELETE. id= '+ action.payload.id);
        const arr = state.todos.filter((item, index) => {
            return +action.payload.id === index ? false : item;
        });
        return {
            text: "",
            todos: arr
        };
    }
    return state;
}