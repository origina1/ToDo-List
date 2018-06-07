import React from 'react';
import {connect} from 'react-redux';
import Task from '../components/Task';
import {delTask} from '../actions/delTask';

class TasksList extends React.Component {
    showTasks() {
        if (this.props.state.todosState.todos !== []) {
            return this.props.state.todosState.todos.map((task, id) => {
                return (
                    <Task key={id} id={id} taskName={task.taskName} />
                );
            });
        }
    }
    render() {
        return (
            <div className='tasks-list'>
            {this.showTasks()}
            </div>
        );
    }
}

function mapStateToProps(todosState) {
    return {
        state: todosState
    };
}

const mapDispatchToProps = {
    delTask
}

export default connect(mapStateToProps, mapDispatchToProps) (TasksList);