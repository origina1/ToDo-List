export const addTask = (taskName, id) => {
    return {
        type: 'TASK_ADD',
        payload: {
            taskName,
            status: false,
            id
        }
    };   
};