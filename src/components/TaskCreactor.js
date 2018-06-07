import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions/addTask';
import {saveInputText} from '../actions/saveInputText';


class TaskCreator extends React.Component {
    handleChange = (event) => {
        this.props.saveInputText(event.target.value);
    }

    handleClick = (elem) => {
        elem.preventDefault();
        if (this.props.state.todosState.text !== '') {
            let id = ++this.props.state.todosState.counter;
            this.props.addTask(this.props.state.todosState.text, id);
        } 
    }

    render() {
        return (
            <div className='input'> 
                <form onSubmit={this.handleClick}>
                    <input
                        className='input-text'
                        placeholder='Новая задача'
                        type='text'
                        value={this.props.state.todosState.text}
                        onChange={this.handleChange}
                    />
                </form>
                <button 
                    onClick={this.handleClick} 
                    className='add-button'
                >
                Добавить
                </button>
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
    addTask,
    saveInputText
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskCreator);