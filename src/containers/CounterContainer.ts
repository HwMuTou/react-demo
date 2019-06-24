// 将 reducer 中的状态插入到组件的 props 中
import NumberPicker, {NumberPickerState} from "../components/NumberPicker";
import {connect} from "react-redux";
import {CounterAction, onValueChange} from "../actions/CounterAction";
import {Dispatch} from "react";
import {RootState} from "../reducers/RootReducer";

const mapStateToProps = (state: RootState): NumberPickerState => {
    return state.counter
};

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = function (dispatch: Dispatch<CounterAction>) {
    return {
        onValueChange: (currentNumber: number) => dispatch(onValueChange(currentNumber))
    };
};

// 使用 connect 高阶组件对 NumberPicker 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(NumberPicker);