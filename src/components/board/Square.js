import React from "react"

import style from './Game.module.css'

class Square extends React.Component {

    render() {

        const {onClick, value} = this.props;

        return (
            <button className={style.square} onClick={onClick}>
                {value}
            </button>
        );
    }

}

export default Square
