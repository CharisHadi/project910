import React from "react";
import axios from "axios";
import EventsTable from "../../EventsTable/EventsTable"
import "./styles.css";

class MyEventsBtn extends React.Component {
    state = {
        eventsList: []
    };
    
    render() {
        var self = this;
        axios.get('/api/getEvents')
            .then(function (response) {
                // handle success
                const userEvents = response.data;
                userEvents.forEach(function(element) {
                    //parse data wanted into object
                    var eventItem = {                       
                        event: element.event,
                        time: element.time,
                        location: element.location
                    }
                    //push data into array
                    console.log(eventItem);
                    self.state.eventsList.push(eventItem);
                    //self.setState({eventsList: self.state.eventsList});
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                //console.log(self.state.eventsList);s
            });
        
    return (
        <div className="nav-button">
        <button type="button" className="btn btn-primary fixed-btn1" data-toggle="modal" data-target="#exampleModal2">
        my events
        </button>

        <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title active-modal" id="exampleModalLabel">My Events</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body" id="my-events">
            <table>
                <thead>
                    <tr>
                        <th>event</th>
                        <th>time</th> 
                        <th>location</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.eventsList.map(anevent => (
                    <EventsTable
                        event = {anevent.event}
                        time = {anevent.time}
                        location = {anevent.location}
                    />
                ))}
                </tbody>
            </table>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Submit</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
    }
}

export default MyEventsBtn;