import React from "react";
import {Container, Label} from "semantic-ui-react";

type FibonacciState = {
    numbers: Array<number>
};

export class Fibonacci extends React.Component<{}, FibonacciState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            numbers: []
        }
    }

    timer: number = -1;

    addNextNumber = () => {
        const {numbers} = this.state;
        const length = numbers.length;

        let newNumbers = [];
        if (length < 2) {
            newNumbers = [...numbers, 1];
        } else {
            const newValue = numbers[length - 1] + numbers[length - 2];
            newNumbers = [...numbers, newValue];
        }
        this.setState({
            numbers: newNumbers
        });

        if (length > 100) {
            this.timer && clearInterval(this.timer);
        }
    };

    componentDidMount = () => {
        this.timer = setInterval(this.addNextNumber, 500)
    };

    componentWillUnmount = (): void => {
        this.timer && clearInterval(this.timer);
    };

    render() {
        const {numbers} = this.state;

        return (
            <Container>
                {
                    numbers.map(
                        (value, index) => (
                            <Label key={index}>{value}</Label>
                        )
                    )
                }
            </Container>
        )
    }
}