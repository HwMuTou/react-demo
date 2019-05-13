import React from 'react';
import {NavLink} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul>
                    <li><NavLink to="/home" activeClassName={'active'}>Home</NavLink></li>
                    <li><NavLink to="/game" activeClassName={'active'}>Game</NavLink></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}

export default App
