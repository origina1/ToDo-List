import React from 'react';
import {connect} from 'react-redux';
import Task from '../components/Task';
import {delTask} from '../actions/delTask';

class TasksList extends React.Component {
    showTasks() {
        if (this.props.state.todosState.todos !== []) {
            return this.props.state.todosState.todos.map((task, id) => {
                return (
                    <div key={id} className='task'>
                        <Task taskName={task.taskName} />
                        <button className='del-button' id={id} onClick={this.props.delTask}>Удалить</button>
                    </div>
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