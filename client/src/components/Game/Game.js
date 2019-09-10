import React from "react";
import "./styles.css";
// import "./index.js";

function Game() {
    return (
        <div className="knowledge-test">
            <div id="header">Recycling Trivia</div>

            <div id="question">Would you like to play Recycling Trivia?</div>

            <div className="center">
                <button id="yes">Yes, Please</button>

                <button id="no">No, Thank You</button>

                <div id="answer0" className="btn btn-outline-success answer"></div>

                <div id="answer1" className="btn btn-outline-success answer"></div>

                <div id="answer2" className="btn btn-outline-success answer"></div>

                <div id="answer3" className="btn btn-outline-success answer"></div>

            </div>

            <div id="numRight" className="results"></div>

            <div id="numWrong" className="results"></div>

            <div className="center">
                <button id="restart" className="results">Restart Portland Trvia!</button>
            </div>
        </div>
    )
}

export default Game;