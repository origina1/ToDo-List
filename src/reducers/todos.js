const initialState = {
    text: '',
    todos: [],
    todosCache: [],
    counter: 0
};

export default function (state = initialState, action) {
    if (action.type === "SAVE_INPUT_TEXT") {
        return {
            ...state,
            text: action.payload.text
        };
    } else if (action.type === "TASK_ADD") {
        // console.log('Значение counter в state: ' + state.counter);
        const arr = state.todos.concat(action.payload);
        const arrCache = state.todosCache.concat(action.payload);
        return {
            text: "",
            todos: arr,
            todosCache: arrCache,
            counter: action.payload.id
        };
    } else if (action.type === "TASK_DELETE") {
        // console.log('привет из reducer TASK_DELETE. id= '+ action.payload.id);
        const arr = state.todos.filter((item) => {
            return +action.payload.id === item.id ? false : item;
        });
        const arrCache = state.todosCache.filter((item) => {
            return +action.payload.id === item.id ? false : item;
        });
        return {
            ...state,
            text: "",
            todos: arr,
            todosCache: arrCache
        };
    } else if (action.type === "CHANGE_TASK_STATUS") {
        const arr = state.todos.map((item) => {
            if (+action.payload.id === item.id) {
                item.status = !action.payload.status;
                return item;
            } else return item;
        });
        const arrCache = state.todosCache.map((item) => {
            if (+action.payload.id === item.id) {
                item.status = !action.payload.status;
                return item;
            } else return item;
        });
        return {
            ...state,
            todos: arr,
            todosCache: arrCache
        };
    } else if (action.type === "FILTER_ALL") {
        const arrCache = state.todosCache.concat();
        console.log('reducer FilterALL');
        return {
            ...state,
            todos: arrCache
        };
    } else if (action.type === "FILTER_COMPLETED") {
        const arrFiltered = state.todosCache.filter((item) => {
            return item.status === true ? item : false;
        });
        console.log('reducer FilterCompleted');
        return {
            ...state,
            todos: arrFiltered
        };
    } else if (action.type === "FILTER_UNCOMPLETED") {
        const arrFiltered = state.todosCache.filter((item) => {
            return item.status === false ? item : false;
        });
        console.log('reducer FilterUncompleted');
        return {
            ...state,
            todos: arrFiltered
        };
    }
    return state;
}