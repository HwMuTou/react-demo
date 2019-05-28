import React, {Component} from "react"
import {ITodo} from "./TodoModel";

interface TodoPageProps {
    todos: Array<ITodo>
}

export class TodoPage extends Component<TodoPageProps> {

    public render() {

        return (
            <div>
                {this.props.todos}
            </div>
        )
    }
}

