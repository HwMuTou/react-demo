import React from 'react';

import {NavLink, Route, Switch, RouteComponentProps} from "react-router-dom";
import Home from "./components/home/Home";
import BoardGame from "./components/board/BoardGame";
import CounterContainer from "./containers/CounterContainer";
import TodoListContainer from "./containers/TodoListContainer";
import {FlowerGarden} from "./page/flower/FlowerGarden";
import {Container, Menu} from "semantic-ui-react";
import _ from 'lodash';
import {TowerHanoi} from "./components/hanoi/TowerHanoi";

class App extends React.Component<RouteComponentProps> {

    pathToName = {
        "/home": "Home",
        "/game": "BoardGame",
        "/counter": "Counter",
        "/todo": "TODO",
        "/FlowerGarden": "FlowerGarden",
        "/TowerHanoi": "TowerHanoi"
    };

    render() {
        const path = this.props.location.pathname;
        const pathToName = this.pathToName;

        return (
            <Container fluid>
                <Menu tabular>
                    {
                        _.map(pathToName, (value, key) =>
                            <Menu.Item active={path.endsWith(key)} key={key}>
                                <NavLink to={key}>{value}</NavLink>
                            </Menu.Item>
                        )
                    }
                </Menu>

                <Switch>
                    <Route path={`/game`} component={BoardGame}/>
                    <Route path={`/counter`} component={CounterContainer}/>
                    <Route path={`/todo`} component={TodoListContainer}/>
                    <Route path={`/FlowerGarden`} component={FlowerGarden}/>
                    <Route path={`/TowerHanoi`} component={TowerHanoi}/>

                    <Route component={Home}/>
                </Switch>

            </Container>
        )
    }
}

export default App;