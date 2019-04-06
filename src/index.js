import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pet from './pet';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pet />, document.getElementById('root'));
registerServiceWorker();
