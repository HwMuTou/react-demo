import {handleActions, IAction} from "redux-actions-helper";
import {Todo, TodoListState} from "../components/todo/TodoList";
import {ADD_TODO, DONE_TODO, RE_TODO} from "../actions/TodoAction";
import {concat} from "lodash"

export default handleActions<TodoListState>({
    [DONE_TODO](state: TodoListState, action: IAction<Todo>) {
        const {todoList} = state;
        const doneTodo = action.payload;

        if (!doneTodo) {
            return {todoList}
        }

        return {
            todoList: todoList.map(todo => {
                if (todo.value === doneTodo.value) {
                    todo.isDone = true;
                }
                return todo;
            })
        };
    },
    [ADD_TODO](state: TodoListState, action: IAction<Todo>) {
        const {todoList} = state;
        const newTodo = action.payload;

        if (!newTodo) {
            return {todoList: todoList};
        }

        return {
            todoList: concat(
                todoList.filter(todo => todo.value !== newTodo.value),
                newTodo
            )
        }
    },
    [RE_TODO](state: TodoListState, action: IAction<Todo>) {
        const {todoList} = state;
        const reTodo = action.payload;

        if (!reTodo) {
            return {todoList}
        }

        return {
            todoList: todoList.map(todo => {
                if (todo.value === reTodo.value) {
                    todo.isDone = false;
                }
                return todo;
            })
        }
    }
}, {todoList: []});