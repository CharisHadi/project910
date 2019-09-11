import React from "react";
import "./styles.css";
import Draggable from "./Draggable"
import Droppable from "./Droppable"

function Game() {
    return (
        <div className="gameboard">
            <h3 className="gamehead">Test Your Knowledge!</h3>
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