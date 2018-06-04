import './css/style.css';
import React from 'react';
import { render } from 'react-dom';
import ToDo from './components/ToDo.js';
// import "bootstrap/dist/css/bootstrap.css";

render (
        <div className='container'>
           <ToDo />
        </div>,
    document.getElementById('app')
);