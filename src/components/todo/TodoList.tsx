import React, {ChangeEvent} from 'react'
import {MessageList, MessageItem, Button, Form, Input} from "semantic-ui-react";
import dash from 'lodash'

export interface Todo {
    icon?: string,
    value: string,
    isDone: boolean
}

export interface TodoListAction {
    doneTodo: (todo: Todo) => any
    addTodo: (todo: Todo) => any
    reTodo: (todo: Todo) => any
}

export interface TodoListState {
    todoList: Todo[]
}

export interface TodoListProps extends TodoListState, TodoListAction {
}

export interface TodoListComponentState {
    inputValue: string
}

export class TodoList extends React.Component<TodoListProps, TodoListComponentState> {

    constructor(props: TodoListProps) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }

    onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: event.target.value
        })
    };

    onSubmit = () => {
        const {inputValue} = this.state;
        this.setState({inputValue: ""});
        this.props.addTodo({
            value: inputValue,
            isDone: false
        });
    };

    todoOnClick = (todo: Todo) => {
        if (todo.isDone) {
            this.props.reTodo({...todo, isDone: !todo.isDone});
        } else {
            this.props.doneTodo({...todo, isDone: !todo.isDone});
        }
    };

    todoListRender = () => {
        const todoList = dash.sortBy(this.props.todoList, (item: Todo) => item.value);

        return todoList.map((todo: Todo, index: number) => {
            return (
                <MessageItem key={todo.value + index}>
                    <Button icon={todo.icon}
                            content={todo.value}
                            labelPosition={"right"}
                            label={todo.isDone ? "isDone" : "start"}
                            onClick={() => {
                                this.todoOnClick(todo)
                            }}
                    />
                </MessageItem>
            )
        })
    };

    render() {

        const todoList = this.todoListRender();

        return (
            <div>
                <MessageList>
                    {todoList}
                </MessageList>

                <Form>
                    <Input onChange={this.onInputChange} value={this.state.inputValue}/>
                    <Button type='submit' onClick={this.onSubmit}>Submit</Button>
                </Form>
            </div>
        )
    }
}