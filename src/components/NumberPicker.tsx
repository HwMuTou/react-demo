import {Button, Input, Segment} from "semantic-ui-react";
import {ChangeEvent} from "react";
import React from "react";
import TodoListContainer from "../containers/TodoListContainer";

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
        const currentValue = parseFloat(event.target.value);
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
            <Segment>
                <Button primary={true} content={"-"} onClick={this.onMinusClick} icon={"arrow alternate circle down"}/>
                <Input value={number} onChange={this.onInputChange} label={"当前值"}/>
                <Button primary={true} content={"+"} onClick={this.onAddClick} icon={"arrow alternate circle up"}/>
                <TodoListContainer/>
            </Segment>
        )
    }
}

export default NumberPicker;