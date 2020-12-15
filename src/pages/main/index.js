import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routers } from '_const/index';
import Nav from './components/nav';
import { Provider } from 'react-redux';
import store from '_store/index';
import '_less/main/index.less';

const Index = () => {
    return (
        <Provider store={store}>
            <Router>
                <Nav />

                <Switch>
                    {routers.map((item) => {
                        return <Route key={item.path} path={item.path} component={item.component} exact={item.exact} />;
                    })}
                </Switch>
            </Router>
        </Provider>
    );
};

export default Index;
