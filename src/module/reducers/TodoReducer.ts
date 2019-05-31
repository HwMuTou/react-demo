import {ModifyAction} from "../count/CounterAction";

export default (state = 0, action: ModifyAction): number => {
    return state + 1;
}