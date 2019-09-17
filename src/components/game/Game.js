import React from "react"
import Board from "./Board.js"
import style from './Game.module.css'
import {find, isEmpty} from "lodash";

class Game extends React.Component {

    initState = () => {
        const boardSize = this.boardSize();
        return {
            history: [{
                squares: Array(boardSize * boardSize).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true,
            winLength: this.winLength()
        }
    };

    boardSize = () => {
        const {boardSize} = this.props;
        return boardSize || 10
    };

    winLength = () => {
        const {winLength} = this.props;
        return winLength || 3;
    };

    constructor(props) {
        super(props);
        this.state = this.initState();
    }

    restart = () => {
        this.setState(this.initState())
    };

    handleClick = (index) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[index]) {
            return;
        }
        squares[index] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    };

    jumpTo = (step) => {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    };

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move || 0}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className={style.game}>
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={this.handleClick}
                    />
                </div>
                <div className={style.gameInfo}>
                    <button onClick={this.restart}>
                        Restart
                    </button>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }

    calculateWinner = (squares) => {
        return find(squares, (value, index) => {
            if (this.haveWinner(value, index, squares)) {
                return true
            }
        });
    };

    haveWinner = (value, index, squares) => {
        return this.rightWin(value, index, squares) ||
            this.downWin(value, index, squares) ||
            this.leftDownWin() ||
            this.rightDownWin()
    };

    rightWin = (value, index, squares) => {
        if (isEmpty(value)) {
            return false;
        }

        const winLength = this.winLength();
        const boardSize = this.boardSize();

        const maxBoardIndex = index + (boardSize - index % boardSize);

        let nextIndex = index;
        let haveNext = true;
        let sameSize = 1;
        do {
            nextIndex = nextIndex + 1;
            if (nextIndex < maxBoardIndex && squares[nextIndex] === value) {
                sameSize += 1;
            } else {
                haveNext = false;
            }

            if (sameSize >= winLength) {
                return true;
            }
        } while (haveNext);
        return false;
    };

    downWin = (value, index, squares) => {
        if (isEmpty(value)) {
            return false;
        }

        const winLength = this.winLength();
        const boardSize = this.boardSize();

        const columnNum = index % boardSize;
        let nextRowNum = (index - columnNum) / boardSize;
        let haveNext = true;
        let sameSize = 1;
        do {
            nextRowNum = nextRowNum + 1;
            let nextIndex = nextRowNum * boardSize + columnNum;
            if (nextRowNum < boardSize && squares[nextIndex] === value) {
                sameSize += 1;
            } else {
                haveNext = false;
            }

            if (sameSize >= winLength) {
                return true;
            }
        } while (haveNext);
        return false;
    };

    leftDownWin = () => {
        /*TODO */
    };

    rightDownWin = () => {
        /*TODO */
    }
}

export default Game
