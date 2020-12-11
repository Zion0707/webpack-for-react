import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routers } from '_const/index';
import Slider from './components/slider';

const Index = () => {
    return (
        <div className="main">
            <Router>
                <Slider />

                {routers.map((item) => {
                    return (
                        <Route
                            key={item.path}
                            path={item.path}
                            component={item.component}
                            exact={item.exact}
                        />
                    );
                })}
            </Router>
        </div>
    );
};

export default Index;
