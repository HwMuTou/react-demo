// 将 reducer 中的状态插入到组件的 props 中
import Counter from "./Counter";
import {connect} from "react-redux";
import {decrement, increment, ModifyAction} from "./CounterAction";
import {Dispatch} from "react";
import {CounterState} from "./CounterState";

const mapStateToProps = (state: CounterState): CounterState => (state);

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch<ModifyAction>) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
});

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);