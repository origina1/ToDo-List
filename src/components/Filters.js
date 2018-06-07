import React from 'react';
import FilterAll from './FilterAll';
import FilterCompleted from './FilterCompleted';
import FilterUncompleted from './FilterUncompleted';

class Filters extends React.Component {
    render() {
        return (
            <div className='filters'>
                <FilterAll />
                <FilterCompleted />
                <FilterUncompleted />
            </div>
        );
    }
}

export default Filters;