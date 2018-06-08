import React from 'react';
import {connect} from 'react-redux';
import {filterAll} from '../actions/filterAll';
import {filterCompleted} from '../actions/filterCompleted';
import {filterUncompleted} from '../actions/filterUncompleted';

class Filters extends React.Component {
    render() {
        return (
            <div className='filters'>
                <button onClick={this.props.filterAll}>Фильтр: все</button>
                <button onClick={this.props.filterCompleted}>Фильтр: сделано</button>
                <button onClick={this.props.filterUncompleted}>Фильтр: не сделано</button>
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
    filterAll,
    filterCompleted,
    filterUncompleted
}

export default connect (mapStateToProps, mapDispatchToProps) (Filters);