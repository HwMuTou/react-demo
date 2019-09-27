import React from 'react';

import {HashRouter, Route} from 'react-router-dom'
import App from './App'
import {store} from "./reducers/Store";
import {Provider} from 'react-redux'

class AppRoute extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Route path={"/"} component={App}/>

                </HashRouter>
            </Provider>
        );
    }
}

export default AppRoute
