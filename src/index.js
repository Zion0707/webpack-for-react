import '_less/index';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '_pages/home/index';

ReactDOM.render(
    <div className="main">
        <Router>
            <Route path="/" exact component={Home} />
        </Router>
    </div>,
    document.getElementById('root')
);
