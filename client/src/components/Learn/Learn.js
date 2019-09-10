import React from "react";
import "./styles.css";

function Learn() {
    return (
        <div className="learn-more">
        <div>
            <h1>Learn More</h1>

            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <h6>search your zip code to learn more about how to recycle different materials in your area</h6>
        </div>


        <div className="grid-container">
            <div className="grid-item grid-items-left"> <img
                    className="grid-pic" src="./images/paperico.png" />Paper</div>
            <div className="grid-item grid-items-right">Recycle Stream 1
                information placeholder
            </div>
            <div className="grid-item grid-items-left"> <img
                    className="grid-pic" src="./images/cansbottlesicon.png" />Cans and Bottles
            </div>
            <div className="grid-item grid-items-right">Recycle Stream 2
                information placeholder
            </div>
            <div className="grid-item grid-items-left"> <img
                    className="grid-pic" src="./images/ewasteicon.png" />Electronic</div>
            <div className="grid-item grid-items-right">Recycle Stream 3
                information placeholder
            </div>
            <div className="grid-item grid-items-left"> <img
                    className="grid-pic" src="./images/batteryico.png" />Battery</div>
            <div className="grid-item grid-items-right">Recycle Stream 4
                information placeholder
            </div>
            <div className="grid-item grid-items-left"> <img
                    className="grid-pic" src="./images/tonericon.png" />Toner Cartridge</div>
            <div className="grid-item grid-items-right">Recycle Stream 5
                information placeholder
            </div>
            <div className="grid-item">
                <img className="grid-pic" src="./images/lightbulbico.png" />Flourescent Bulb
            </div>
            <div className="grid-item grid-items-right">Recycle Stream 6
                information placeholder
            </div>
        </div>
      </div>
    )
}

export default Learn;