import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import portfolio from './data/portfolio';

import App from './App';

 

import 'material-components-web/dist/material-components-web.css';
import './style.css';

 
  
ReactDOM.render(
    <Router>
        <App portfolio={portfolio} />
    </Router>,
    document.getElementById('root')
);
