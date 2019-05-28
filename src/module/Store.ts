import {combineReducers, createStore} from "redux";
import {TodoReducer} from "./todo/TodoModel";

const rootStore = combineReducers(
    {todo: TodoReducer}
    );

export const store = createStore(rootStore);