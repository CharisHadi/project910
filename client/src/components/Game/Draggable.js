import React from "react";
import "./styles.css";

const DragStyle = {
    width:200,
    height:150,
}

function Draggable() {
    return (
        <img src="./../../images/plastic-water-bottle.jpg"
            style = {DragStyle}
        />
    )
}

export default Draggable;