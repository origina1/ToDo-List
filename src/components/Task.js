import React from 'react';
import {delTask} from '../actions/delTask';

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