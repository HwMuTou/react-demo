import {createAction} from "redux-actions-helper";
import {Todo} from "../components/todo/TodoList";

export const DONE_TODO= "DONE_TODO";
export const ADD_TODO= "ADD_TODO";
export const RE_TODO= "RE_TODO";

export const doneTodo = createAction<Todo>(DONE_TODO);
export const addTodo = createAction<Todo>(ADD_TODO);
export const reTodo = createAction<Todo>(RE_TODO);
