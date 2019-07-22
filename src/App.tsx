import React from 'react';

import {NavLink, Route, Switch, RouteComponentProps} from "react-router-dom";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
import CounterContainer from "./containers/CounterContainer";
import TodoListContainer from "./containers/TodoListContainer";
import {Container, Menu, Responsive} from "semantic-ui-react";

class App extends React.Component<RouteComponentProps> {
    render() {
        return (
            <Responsive>

                <Menu>
                    <Container>
                        <Menu.Item as={'a'}>
                            <NavLink to={`/home`}>Home</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink to={`/game`}>Game</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink to={`/counter`}>Counter</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink to={`/todo`}>TODO</NavLink>
                        </Menu.Item>
                    </Container>
                </Menu>

                <Switch>
                    <Route path={`/game`} component={Game}/>
                    <Route path={`/counter`} component={CounterContainer}/>
                    <Route path={`/todo`} component={TodoListContainer}/>

                    <Route component={Home}/>
                </Switch>

            </Responsive>
        )
    }
}

export default App;