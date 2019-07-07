import React from 'react';

import {NavLink, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
import CounterContainer from "./containers/CounterContainer";
import TodoListContainer from "./containers/TodoListContainer";


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/game">Game</NavLink></li>
                    <li><NavLink to="/counter">Counter</NavLink></li>
                    <li><NavLink to="/todo">TODO</NavLink></li>
                </ul>

                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/counter" component={CounterContainer}/>
                    <Route path="/todo" component={TodoListContainer}/>
                </Switch>

            </div>
        )
    }
}

export default App
