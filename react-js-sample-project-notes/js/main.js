
import React from 'react';
import ReactDOM from 'react-dom';
import App from './react_view_module/mainForm';
import event from 'events';

window.ee = new event.EventEmitter();



ReactDOM.render(<App/>, document.getElementById('content')); 
 




