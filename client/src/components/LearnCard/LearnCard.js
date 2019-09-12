import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./styles.css";

function LearnCard(props) {
    return (
        <div>
            <Row>
                <Col>
                    <img className="grid-pic" src={props.imgUrl} alt="" />
                    <p>{props.materialName}</p>
                </Col>
                <Col>
                    <p>{props.info}</p>
                </Col>
            </Row>
        </div>
    )
}

export default LearnCard;