import {createStore} from "redux";
import rootReducer from "./reducers/Index";

export const store = createStore(rootReducer);

console.log(store.getState());