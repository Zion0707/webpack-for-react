import '_less/index';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '_pages/home/index';
import List from '_pages/list/index';

ReactDOM.render(
    <div className="main">
        <Router>
            <Link to="/">
                <button>首页</button>
            </Link>
            <Link to="/list">
                <button>列表</button>
            </Link>
            <Route path="/" exact component={Home} />
            <Route path="/list" component={List} />
        </Router>
    </div>,
    document.getElementById('root')
);
