import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions/filter';

class Filters extends React.PureComponent {
    handleClick = (event) => {
        this.props.setFilter(event.target.id);
    }

    render() {
        return (
            <div className='filters'>
                <button id="SHOW_ALL" onClick={this.handleClick}>Фильтр: все</button>
                <button id="SHOW_COMPLETED" onClick={this.handleClick}>Фильтр: сделано</button>
                <button id="SHOW_UNCOMPLETED" onClick={this.handleClick}>Фильтр: не сделано</button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    setFilter
}

export default connect (null, mapDispatchToProps) (Filters);