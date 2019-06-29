/*
 处理并返回 state
*/
import {ON_VALUE_CHANGE} from "../actions/CounterAction";
import {handleActions, IAction} from "redux-actions-helper";
import {NumberPickerState} from "../components/NumberPicker";

export default handleActions<NumberPickerState>({
    [ON_VALUE_CHANGE](state: NumberPickerState, action: IAction<number>) {
        return {
            number: action.payload
        };
    }
}, {number: 0});