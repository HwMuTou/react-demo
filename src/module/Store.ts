import {combineReducers, createStore} from "redux";
import {RootReducer} from "./reducers/RootReducer";

export const rootReducer = combineReducers(RootReducer);
export const store = createStore(rootReducer);

console.log(store.getState());