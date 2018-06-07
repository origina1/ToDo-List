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
        console.log('Значение counter в state: ' + state.counter);
        const arr = state.todos.concat(action.payload);
        return {
            text: "",
            todos: arr,
            counter: action.payload.id
        };
    } else if (action.type === "TASK_DELETE") {
        console.log('привет из reducer TASK_DELETE. id= '+ action.payload.id);
        const arr = state.todos.filter((item, index) => {
            return +action.payload.id === item.id ? false : item;
        });
        return {
            ...state,
            text: "",
            todos: arr
        };
    }
    return state;
}