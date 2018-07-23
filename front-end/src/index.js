import React from 'react';
import ReactDOM from 'react-dom';
import State from './state';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<State />, document.getElementById('root'));
registerServiceWorker();
