export const delTask = (e) => {
    console.log('привет из action TASK_DELETE');
    return {
        type: 'TASK_DELETE',
        payload: {
            id: e.target.id
        }
    };   
};