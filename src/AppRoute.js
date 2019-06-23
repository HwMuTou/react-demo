import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom'
import App from './App'
import Home from './components/home/Home'
import Game from './components/game/Game'
import CounterContainer from "./containers/CounterContainer";
import {store} from "./reducers/Store";
import {Provider} from 'react-redux'

class AppRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>

                    <Route path="/" component={App}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/counter" component={CounterContainer}/>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default AppRoute
