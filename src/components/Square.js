import React from "react";
import "./Square.css";

const Sqaure = ({ onClick, value }) => {
    return (
        <button className="square"
            onClick={onClick}>
            {value}
        </button>
    )
}

export default Sqaure;