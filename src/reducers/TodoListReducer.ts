import {handleActions, IAction} from "redux-actions-helper";
import {Todo, TodoListState} from "../components/todo/TodoList";
import {ADD_TODO, DONE_TODO, RE_TODO} from "../actions/TodoAction";
import dash from "lodash"

export default handleActions<TodoListState>({
    [DONE_TODO](state: TodoListState, action: IAction<Todo>) {
        const {todoList} = state;
        const newTodoList = dash.concat(
            todoList.filter(todo => todo.value !== action.payload!.value),
            [action.payload]
        );
        return {
            todoList: newTodoList
        };
    },
    [ADD_TODO](state: TodoListState, action: IAction<Todo>) {
        const {todoList} = state;
        const newTodoList = dash.concat(todoList, [action.payload]);
        return {
            todoList: newTodoList
        };
    },
    [RE_TODO](state: TodoListState, action: IAction<Todo>) {
        const {todoList} = state;
        const newTodoList = dash.concat(
            todoList.filter(todo => todo.value !== action.payload!.value),
            [{...action.payload, isDone: false}]);
        return {
            todoList: newTodoList
        };
    }
}, {todoList: []});