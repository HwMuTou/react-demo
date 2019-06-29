import CounterReducer from "./CounterReducer";
import {StateType} from "typesafe-actions";
import TodoListReducer from "./TodoListReducer";

export const RootReducer = {
    counter: CounterReducer,
    todoList: TodoListReducer
};

export type RootState = StateType<typeof RootReducer>;