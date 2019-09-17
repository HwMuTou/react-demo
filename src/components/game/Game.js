import React from "react"
import Board from "./Board.js"
import style from './Game.module.css'
import _ from "lodash";

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
            status = <p className={style.winner}>{'Winner: ' + winner}</p>;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className={style.game}>
                <div className={style.gameBoard}>
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
        return squares.some((value, index) => {
            return this.haveWinner(value, index, squares);
        });
    };

    haveWinner = (value, index, squares) => {
        if (_.isEmpty(value)) {
            return false;
        }

        return this.rightWin(value, index, squares) ||
            this.downWin(value, index, squares) ||
            this.leftDownWin(value, index, squares) ||
            this.rightDownWin(value, index, squares)
    };

    rightWin = (value, index, squares) => {
        const winLength = this.winLength();
        const boardSize = this.boardSize();

        const rightSize = boardSize - (index % boardSize);
        if (rightSize < winLength) {
            return false;
        }

        const nextIndex = function (index, boardSize, checkNum) {
            return index + checkNum;
        };
        return this.enoughWin(value, index, squares, nextIndex)
    };

    downWin = (value, index, squares) => {
        const winLength = this.winLength();
        const boardSize = this.boardSize();

        const downSize = boardSize - Math.floor(index / boardSize);
        if (downSize < winLength) {
            return false;
        }

        const nextIndex = function (index, boardSize, checkNum) {
            return index + boardSize * checkNum;
        };
        return this.enoughWin(value, index, squares, nextIndex)
    };

    leftDownWin = (value, index, squares) => {
        const winLength = this.winLength();
        const boardSize = this.boardSize();

        const leftSize = index % boardSize;
        if (leftSize < winLength) {
            return false;
        }

        const nextIndex = function (index, boardSize, checkNum) {
            return index + boardSize * checkNum - checkNum;
        };
        return this.enoughWin(value, index, squares, nextIndex)
    };

    rightDownWin = (value, index, squares) => {
        const winLength = this.winLength();
        const boardSize = this.boardSize();

        const rightSize = boardSize - (index % boardSize);
        if (rightSize < winLength) {
            return false;
        }

        const nextIndex = function (index, boardSize, checkNum) {
            return index + boardSize * checkNum + checkNum;
        };
        return this.enoughWin(value, index, squares, nextIndex)
    };

    enoughWin = (value, index, squares, nextIndexFun) => {
        const winLength = this.winLength();
        const boardSize = this.boardSize();

        let sameSize = 1;
        for (const checkNum of _.range(1, winLength)) {
            const nextIndex = nextIndexFun(index, boardSize, checkNum);
            if (squares[nextIndex] === value) {
                sameSize += 1;
            }
        }
        return sameSize >= winLength;
    };
}

export default Game
