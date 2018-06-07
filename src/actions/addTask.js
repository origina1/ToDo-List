export const addTask = (taskName) => {
    return {
        type: 'TASK_ADD',
        payload: {
            taskName: taskName,
            status: true,
            id
        }
    };   
};