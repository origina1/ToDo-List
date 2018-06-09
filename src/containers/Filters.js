import React from 'react';
import {connect} from 'react-redux';
import {filter} from '../actions/filter';

class Filters extends React.Component {
    handleClick = (event) => {
        this.props.filter(event.target.id);
    }

    render() {
        return (
            <div className='filters'>
                <button id="FILTER_ALL" onClick={this.handleClick}>Фильтр: все</button>
                <button id="FILTER_COMPLETED" onClick={this.handleClick}>Фильтр: сделано</button>
                <button id="FILTER_UNCOMPLETED" onClick={this.handleClick}>Фильтр: не сделано</button>
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
    filter
}

export default connect (mapStateToProps, mapDispatchToProps) (Filters);