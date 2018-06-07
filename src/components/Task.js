import React from 'react';
// import {connect} from 'react-redux';
import {delTask} from '../actions/delTask';

class Task extends React.Component {
    constructor(props) {
        super(props);
        // console.info('props id: ' + props.id + ', taskName: ' + props.taskName);
    }
    
    render() {
        return (
            <div className='task'>
                <span>{this.props.taskName}</span>
                {/* <button className='del-button' id={this.props.id} onClick={this.props.delTask}>Удалить</button> */}
                <button className='del-button' id={this.props.id} onClick={delTask}>Удалить</button>
            </div>
        );
    }
}

// const mapDispatchToProps = {
//     delTask
// }

// export default connect(mapDispatchToProps) (Task);

export default Task;