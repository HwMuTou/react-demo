import * as React from 'react';
import {ChangeEvent} from "../../node_modules/@types/react-router/node_modules/@types/react";

export interface NumberPickerState {
    number: number
}

// 创建类型接口
export interface NumberPickerProps extends NumberPickerState {
    onValueChange: (currentNumber: number) => any
}

class NumberPicker extends React.Component<NumberPickerProps, NumberPickerState> {

    public constructor(props: NumberPickerProps) {
        super(props);
        this.state = {
            number: props.number
        }
    }

    private onAddClick() {
        const currentValue = this.state.number + 1;
        this.setState({
            number: currentValue
        });
        this.props.onValueChange(currentValue)
    }

    public onMinusClick() {
        const currentValue = this.state.number - 1;
        this.setState({
            number: currentValue
        });
        this.props.onValueChange(currentValue)
    }

    public onInputChange(event: ChangeEvent<HTMLInputElement>) {
        const currentValue = parseFloat(event.target.value);
        this.setState({
            number: currentValue
        });
        this.props.onValueChange(currentValue)
    }

    public render() {
        const number = this.state.number;

        return (
            <div>
                <button onClick={() => {
                    this.onAddClick()
                }} style={{marginRight: 20}}> +
                </button>

                <input value={number} onChange={(event) => {
                    this.onInputChange(event)
                }}/>

                <button onClick={() => {
                    this.onMinusClick()
                }}> -
                </button>
            </div>
        )
    }
}

export default NumberPicker;