import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom'
import App from './module/App'
import Home from './module/home/Home'
import Game from './module/game/Game'

class RouteDef extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={App}/>
                <Route path="/home" component={Home}/>
                <Route path="/game" component={Game}/>

            </BrowserRouter>
        );
    }
}

export default RouteDef
