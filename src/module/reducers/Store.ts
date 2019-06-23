import {combineReducers, createStore} from "redux";
import {RootReducer} from "./RootReducer";

export const rootReducer = combineReducers(RootReducer);
export const store = createStore(rootReducer);