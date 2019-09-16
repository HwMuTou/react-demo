import React from "react"

class Square extends React.Component {

    render() {

        const {onClick, value} = this.props;

        return (
            <button className="square" onClick={onClick}>
                {value}
            </button>
        );
    }

}

export default Square
