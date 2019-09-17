import {ChangeEvent} from "react";
import React from "react";
import style from "./NumberPicker.module.scss"

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

    private onAddClick = () => {
        const currentValue = this.state.number + 1;
        this.setCurrentValueWithCallback(currentValue)
    };

    public onMinusClick = () => {
        const currentValue = this.state.number - 1;
        this.setCurrentValueWithCallback(currentValue)
    };

    public onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const currentValue = Number(event.target.value);
        this.setCurrentValueWithCallback(currentValue)
    };

    private setCurrentValueWithCallback = (currentValue: number) => {
        this.setState({
            number: currentValue
        });
        this.props.onValueChange(currentValue)
    };

    public render() {
        const number = this.state.number;

        return (
            <div className={style.numberPicker}>
                <button className={style.button} onClick={this.onMinusClick}>-</button>
                <input value={number} onChange={this.onInputChange}/>
                <button className={style.button} onClick={this.onAddClick}>+</button>
            </div>
        )
    }
}

export default NumberPicker;