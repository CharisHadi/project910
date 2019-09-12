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
            <form>
                <div class="form-group">
                    <label>Event Name:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Event Name" 
                    value={this.state.nameOfEvent} 
                    onChange={this.handleEventNameChange} />
                </div>
                <div class="form-group">
                <label>Location:</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value={this.state.location} 
                    onClick={this.handleLocationChange}
                    />
                </div>
                <div class="form-group">
                    <label>Date and Time:</label>
                    <input 
                    type="datetime-local" 
                    className="form-control"
                    value={this.state.datetime} 
                    onClick={this.handleDateTimeChange}
                    />
                </div>
                <div class="form-group">
                    <label>Event Details:</label>
                    <textarea
                    className="form-control"
                    value={this.state.details} 
                    onChange={this.handleDetailsChange} 
                    rows="10"
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form;