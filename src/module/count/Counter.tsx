import * as React from 'react';

// 创建类型接口
export interface CounterProps {
    count: number
    onIncrement: () => void
    onDecrement: () => void
}

class Counter extends React.Component<CounterProps> {

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