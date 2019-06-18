import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom'
import App from './module/App'
import Home from './module/home/Home'
import Game from './module/game/Game'
import CounterConnect from "./module/count/CounterConnect";
import {store} from "./module/Store";
import {Provider} from 'react-redux'

class AppRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>

                <Route path="/" component={App}/>
                <Route path="/home" component={Home}/>
                <Route path="/game" component={Game}/>
                <Route path="/counter" component={CounterConnect}/>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default AppRoute
