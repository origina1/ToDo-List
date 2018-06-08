export const changeTaskStatus = (id, status) => {
    return {
        type: 'CHANGE_TASK_STATUS',
        payload: {
            id,
            status
        }
    };   
};