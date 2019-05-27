import {Todo, TodoProps} from "./Todo";
import React, {Component} from "react";

export interface TodoListProps {
    todos: Array<TodoProps>
    onTodoClick: (index: Number) => void
}

export class TodoList extends Component<TodoListProps> {

    public render() {

        return (
            <ul>
                {this.props.todos.map((todo, index) => (
                    <Todo key={index} {...todo} onClick={() => this.props.onTodoClick(index)} />
                ))}
            </ul>
        )

    }
}