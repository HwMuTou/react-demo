import {createAction, handleActions} from "redux-actions-helper";

export interface ITodo {
    id: number,
    todo: string,
    completed: boolean
}

const ADD_TODO = "ADD_TODO";

export const addTodo = createAction<ITodo>(
    ADD_TODO,
    (text: string) => ({id: 1, todo: text, completed: true})
);


const initialState: ITodo = {
    completed: true,
    id: 1,
    todo: 'Use Redux',
};


export const TodoReducer = handleActions({
    [ADD_TODO]: (state: any, action: any) => {
        console.log('reducer->state:', state);
        console.log('reducer->action:', action);
        return {completed: true, text: action.payload.text, id: 2};
    },
}, initialState);