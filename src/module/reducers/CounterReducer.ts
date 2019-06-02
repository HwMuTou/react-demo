// 处理并返回 state
import {DECREMENT, INCREMENT, ModifyAction} from "../count/CounterAction";
import {CounterState} from "../count/CounterState";

export default (state = {count: 0}, action: ModifyAction): CounterState => {
    switch (action.type) {
        case INCREMENT:
            state.count = state.count + 1;
            break;
        case DECREMENT:
            state.count = state.count - 1;
            break;
    }
    return state
}