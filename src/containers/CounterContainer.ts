// 将 reducer 中的状态插入到组件的 props 中
import Counter, {CounterState} from "../components/Counter";
import {connect} from "react-redux";
import {decrement, increment, ModifyAction} from "../actions/CounterAction";
import {Dispatch} from "react";
import {RootState} from "../reducers/RootReducer";

const mapStateToProps = (state: RootState): CounterState => {
    return state.counter
};

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = function (dispatch: Dispatch<ModifyAction>) {
    console.log(decrement());
    console.log(increment());
    return {
        onDecrement: () => dispatch(decrement()),
        onIncrement: () => dispatch(increment())
    };
};

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);