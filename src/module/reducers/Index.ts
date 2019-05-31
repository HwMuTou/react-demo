import CounterReducer from "./CounterReducer";
import TodoReducer from "./TodoReducer";

import {combineReducers} from "redux";


const RootReducer = combineReducers({todo: TodoReducer, CounterState: CounterReducer});

export default RootReducer