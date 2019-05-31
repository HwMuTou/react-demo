import CounterReducer from "./CounterReducer";
import TodoReducer from "./TodoReducer";

import {combineReducers} from "redux";


const RootReducer = combineReducers({TodoReducer, CounterReducer});

export default RootReducer