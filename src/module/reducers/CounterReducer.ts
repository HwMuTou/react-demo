/*
 处理并返回 state
*/
import {DECREMENT, INCREMENT} from "../count/CounterAction";
import {CounterState} from "../count/CounterState";
import {handleActions} from "redux-actions-helper";

const initCounterState: CounterState = {
    count: 0
};

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
}, initCounterState);