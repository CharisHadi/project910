import React from "react";
import "./styles.css";

const DragStyle = {
    width:200,
    height:150,
}

function Droppable() {
    return (
        <img src="./../../images/mixed-recycle-bin.jpg"
            style = {DragStyle}
        />
    )
}

export default Droppable;