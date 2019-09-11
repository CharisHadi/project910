import React, { Component } from "react";
import "./styles.css";

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nameOfEvent: "",
            details: "",
            datetime: "",
            location: ""
        }
    }

    handleEventNameChange = event => {
        this.setState({
            nameOfEvent: event.target.value
        })
    }

    handleDetailsChange = event => {
        this.setState({
            details: event.target.value
        })
    }

    handleDateTimeChange = event => {
        this.setState({
            datetime: event.target.value
        })
    }

    handleLocationChange = event => {
        this.setState({
            location: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.nameOfEvent} ${this.state.details} ${this.state.datetime}`)
        event.preventDefault()
    }

    render() {
        return (
            <form className="myForm" onSubmit={this.handleSubmit}>
                <div>
                    <label>Name of Event:</label>
                    <input 
                    type="text" 
                    value={this.state.nameOfEvent} 
                    onChange={this.handleEventNameChange} 
                    />
                </div>
                <div>
                    <label>Date and Time:</label>
                    <input 
                    type="datetime-local" 
                    value={this.state.datetime} 
                    onClick={this.handleDateTimeChange}
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input 
                    type="text" 
                    value={this.state.location} 
                    onClick={this.handleLocationChange}
                    />
                </div>
                <div id="comment-box">
                    <label>Event Details:</label>
                    <textarea
                    value={this.state.details} 
                    onChange={this.handleDetailsChange} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;