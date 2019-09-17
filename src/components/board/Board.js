import {Component} from "react"
import Square from "./Square"
import React from "react";
import {range} from "lodash"

import style from './Game.module.css'

class Board extends Component {

    onClick = (index) => {
        this.props.onClick(index)
    };

    renderSquare = (index) => {
        return (
            <Square key={index}
                    value={this.props.squares[index]}
                    onClick={() => this.onClick(index)}
            />
        );
    };

    renderLine = (index, size) => {
        return (
            <div className={style.boardRow} key={index}>
                {
                    range(0, size).map(value =>
                        this.renderSquare(index * size + value)
                    )
                }
            </div>
        )
    };

    render() {
        const {squares} = this.props;
        const size = Math.sqrt(squares.length);
        return (
            <div>
                {
                    range(0, size).map(index =>
                        this.renderLine(index, size)
                    )
                }
            </div>
        );
    }

}

export default Board
