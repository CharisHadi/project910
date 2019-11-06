import React from "react";
import axios from "axios";
import moment from "moment";
import EventForm from "../../Forms/EventForm/EventForm";
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import "./styles.css";

class CreateEventBtn extends React.Component {

    state = {
        nameOfEvent: "",
        details: "",
        datetime: "",
        location: ""
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
        var formattedDate = moment(this.state.datetime).format('YYYY-MM-DD hh:mm:ss');

        geocodeByAddress(this.state.location)
        .then(results => {
            console.log("results:" ,results)
            return(getLatLng(results[0]))
        })
        .then((res) =>
            //console.log('Successfully got latitude and longitude', res)
            axios.post('/api/addEvent', {
                event: this.state.nameOfEvent,
                time: formattedDate,
                location: this.state.location,
                latitude: res.lat,
                longitude: res.lng,
                description: this.state.details,
                userId: this.props.userID
            })
        )
        .then((res) => 
            console.log(this.props.myEventsSetState)
        )
        .catch(function (error) {
            console.log(error);
        }
        ).catch(err => {
            console.log(err)
        })

    }

    render() {

    return (
        <div className="nav-button">
            <button type="button" className="btn btn-primary fixed-btn2" data-toggle="modal" data-target="#exampleModal1">
            <i className="far fa-calendar-plus"></i> create event
            </button>

            <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create an Event</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <EventForm 
                        handleDateTimeChange = {this.handleDateTimeChange}
                        handleDetailsChange = {this.handleDetailsChange}
                        handleEventNameChange = {this.handleEventNameChange}
                        handleLocationChange = {this.handleLocationChange}
                    />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" onClick = {this.handleSubmit} className="btn btn-primary" data-dismiss="modal">Add Event</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
    }
}

export default CreateEventBtn;