import React from "react";
import "./styles.css";



function Droppable(props) {
    return (
        <img src="./../../images/mixed-recycle-bin.jpg"
            className = "dropper"
            alt= {props.alttext}
        />
    )
}

export default Droppable;