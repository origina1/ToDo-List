import {combineReducers} from 'redux';
import ToDosReducer from './todos';

const allReducers = combineReducers ({
    todosState: ToDosReducer
});

export default allReducers;