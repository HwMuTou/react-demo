/*
 处理并返回 state
*/
import {CounterAction, ON_VALUE_CHANGE} from "../actions/CounterAction";
import {handleActions} from "redux-actions-helper";
import {NumberPickerState} from "../components/NumberPicker";

export default handleActions<NumberPickerState>({
    [ON_VALUE_CHANGE](state: NumberPickerState, action: CounterAction) {
        return {
            number: action.payload
        };
    }
}, {number: 0});