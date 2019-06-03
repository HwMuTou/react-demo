import {createAction} from "redux-actions-helper";
import {Action} from "redux";


export interface TodoAction extends Action {
}

export const todo = createAction("todo");

export default (state = 0, action: TodoAction): number => {
    return state + 1;
}