import React from 'react';
import {connect} from 'react-redux';
import Task from '../components/Task';
import {delTask} from '../actions/delTask';
import {changeTaskStatus} from '../actions/changeTaskStatus';

class TasksList extends React.Component {
    showTasks() {
        if (this.props.state.todosState.todos !== []) {
            return this.props.state.todosState.todos.map((task, index) => {
                return (
                    <div
                        className={task.status ? 'task checked' : 'task'}
                        key={index} 
                        data-status={task.status}
                        data-id={task.id}
                        onClick={() => this.props.changeTaskStatus(task.id, task.status)}
                    >
                        <Task taskName={task.taskName}/>
                        <button 
                            className='del-button' 
                            id={task.id} 
                            onClick={this.props.delTask}
                        >   Удалить
                        </button>
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
    delTask,
    changeTaskStatus
}

export default connect(mapStateToProps, mapDispatchToProps) (TasksList);