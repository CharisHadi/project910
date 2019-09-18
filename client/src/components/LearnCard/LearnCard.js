import React from "react";
import Col from 'react-bootstrap/Col';
import "./styles.css";

function LearnCard(props) {
    return (
        <Col>
            <div className="dropdown">
            <span>
                <img className="grid-pic" src={props.imgUrl} alt="" />
            </span>
                <div className="dropdown-content" id={props.id}>
                    <h3>{props.materialName}</h3>
                    <p>{props.info}</p>
                </div>
            </div>         
        </Col>
    )
}

export default LearnCard;