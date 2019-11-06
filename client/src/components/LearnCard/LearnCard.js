import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LearnHover from "./LearnHover";
import "./styles.css";

class LearnCard extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
        };
      }
    
      handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }

      render() {
            return (
                <Col 
                className="dropdown"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover} >
                <span>
                    <img className="grid-pic" src={this.props.imgUrl} alt="" />
                    <p>{this.props.materialName}</p>
                </span>
                <Row>
                {this.state.isHovering && <LearnHover id={this.props.id} materialName={this.props.materialName} info={this.props.info} />}
                </Row>
                </Col>       
            )
        }
}

export default LearnCard;