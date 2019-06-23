import React from 'react';

import {NavLink} from "react-router-dom";


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/game">Game</NavLink></li>
                    <li><NavLink to="/counter">Counter</NavLink></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}

export default App
