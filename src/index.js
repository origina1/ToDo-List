import './css/style.css';
import React from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import Header from './components/Header';
import TaskCreator from './containers/TaskCreactor';
import TasksList from './containers/tasks-list';
import Filters from './containers/Filters';

const store = createStore(allReducers);

render (
        <Provider store={store}>
            <div className='container'>
                <Header />
                <TaskCreator />
                <TasksList />
                <Filters />
            </div>
        </Provider>,
    document.getElementById('app')
);