import React from "react";
import "./styles.css";

function NavMessage(props) {
    return (
        <div className="nav-message">{props.isLoggedIn ? 'USER' : 'Join the movement!'}</div>
    )
}

export default NavMessage;