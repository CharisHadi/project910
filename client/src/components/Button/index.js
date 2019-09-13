import React from "react";

function Button(props) {
    return (
        <button type="button" onclick={props.whenClicked} id={props.id} className={props.className}>Click Me!</button>
    )
}

export default Button;