import React, { Component } from "react";
import "./styles.css";

class EventForm extends Component {

    render() {
        return (
            <form>
                <div className="form-group">
                <label>Event Name:</label>
                    <input 
                    type="text" 
                    className="form-control input" 
                    placeholder="Event Name"
                    onChange={this.props.handleEventNameChange} />
                </div>
                <div className="form-group">
                <label>Location:</label>
                    <input 
                    type="text" 
                    className="form-control input"
                    placeholder="Zip Code"
                    onChange={this.props.handleLocationChange}
                    />
                </div>
                <div className="form-group">
                    <label>Date and Time:</label>
                    <input 
                    type="datetime-local" 
                    className="form-control input"
                    onChange={this.props.handleDateTimeChange}
                    />
                </div>
                <div className="form-group">
                    <label>Event Details:</label>
                    <textarea
                    className="form-control textarea"
                    onChange={this.props.handleDetailsChange} 
                    rows="10"
                    />
                </div>
            </form>
        )
    }
}

export default EventForm;