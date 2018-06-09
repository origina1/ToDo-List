import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                <div data-task='task'>{this.props.taskName}</div>
        );
    }
}

export default Task;