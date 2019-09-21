import React from "react";
import "./styles.css";

function NavMessage(props) {
    return (
        <div className="nav-message">{props.theMessage}</div>
    )
}

export default NavMessage;