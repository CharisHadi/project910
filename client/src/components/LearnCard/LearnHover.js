import React from "react";
import "./styles.css";

function LearnHover(props) {
    return (
        <div className="dropdown-content" id={props.id}>
            <h3>{props.materialName}</h3>
            <p>{props.info}</p>
        </div>
    )
}

export default LearnHover;