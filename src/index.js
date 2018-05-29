import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Task from './Task';

import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <Task/>
    </div>,
    destination
);
