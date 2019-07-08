import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom'
import App from './App'
import {store} from "./reducers/Store";
import {Provider} from 'react-redux'

class AppRoute extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route component={App}/>

                </BrowserRouter>
            </Provider>
        );
    }
}

export default AppRoute
