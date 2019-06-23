import * as React from 'react';

export interface CounterState {
    count: number
}

// 创建类型接口
export interface CounterProps extends CounterState {
    onIncrement: () => void
    onDecrement: () => void
}

class Counter extends React.Component<CounterProps, CounterState> {

    public constructor(props: CounterProps) {
        super(props)
    }

    public render() {
        const count = this.props.count;

        return (
            <div>
                <p>Clicked: {count} times</p>
                <button onClick={this.props.onIncrement} style={{marginRight: 20}}> +</button>
                <button onClick={this.props.onDecrement}> -</button>
            </div>
        )
    }
}

export default Counter;