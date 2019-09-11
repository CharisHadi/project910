import React from "react";
import "./styles.css";
import Draggable from "./Draggable"
import Droppable from "./Droppable"
// import "./index.js";

function Game() {
    return (
        <div className="gameboard">
            <div className="droppables">
                <Droppable/>
            </div>
            <div className="draggables">
                <Draggable/>
            </div>
        </div>
    )
}

export default Game;