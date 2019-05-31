import * as React from 'react';
import {CounterState} from "./CounterState";


// 创建类型接口
export interface CounterProps {
    CounterState: CounterState,
    onIncrement: () => void,
    onDecrement: () => void
}

class Counter extends React.Component<CounterProps>{

    public render(){
        return (
            <div>
                <p>Clicked: { this.props.CounterState.count } times</p>
                <button onClick={ this.props.onIncrement } style={{ marginRight: 20 }}> +  </button>
                <button onClick={ this.props.onDecrement }> - </button>
            </div>
        )
    }
}

export default Counter;