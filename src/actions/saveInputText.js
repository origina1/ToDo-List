export const saveInputText = (text) => {
    return {
        type: 'SAVE_INPUT_TEXT',
        payload: {
            text: text
        }
    };   
};