import { useState } from "react";

function Square(props) {
    return (
        <div className="square" onClick={() => props.handleClick(props.id)}>
            {props.value}
        </div>
    );
}

export default Square;