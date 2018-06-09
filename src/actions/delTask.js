export const delTask = (e) => {
    return {
        type: 'TASK_DELETE',
        payload: {
            id: e.target.id
        }
    };   
};