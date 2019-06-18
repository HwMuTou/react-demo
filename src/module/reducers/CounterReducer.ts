/*
 处理并返回 state
*/
import {DECREMENT, INCREMENT} from "../count/CounterAction";
import {CounterState} from "./CounterState";
import {handleActions} from "redux-actions-helper";

//TODO you should change the state object. just create new Object.
export default handleActions<CounterState>({
    [INCREMENT](state: CounterState) {
        return {
            count: state.count + 1
        };
    },
    [DECREMENT](state: CounterState) {
        return {
            count: state.count - 1
        };
    }
}, {count: 0});