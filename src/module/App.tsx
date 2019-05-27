import React from 'react';
import {Provider} from 'react-redux'

import store from "./todo/store";
import {NavLink} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <h1>React Router Tutorial</h1>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/game">Game</NavLink></li>
                        <li><NavLink to="/todo">Todo</NavLink></li>
                    </ul>

                    {this.props.children}
                </Provider>
            </div>
        )
    }
}

export default App
