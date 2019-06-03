// 处理并返回 state
import {DECREMENT, INCREMENT, ModifyAction} from "../count/CounterAction";
import {CounterState} from "../count/CounterState";

const initCounterState: CounterState = {
    count: 0
};

export default (state = initCounterState, action: ModifyAction): CounterState => {
    //TODO you should change the state object. just create new Object.
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        default:
            return state
    }
}