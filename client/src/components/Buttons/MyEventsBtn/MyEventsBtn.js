import React from "react";
import axios from "axios";
import EventsTable from "../../EventsTable/EventsTable";
import CreateEventBtn from "../CreateEventBtn/CreateEventBtn";
import moment from "moment";
import "./styles.css";

class MyEventsBtn extends React.Component {
    
    state = {
        eventsList: []
    };

    myEventsSetState = () => {
        let url = "/api/getEvents/" + this.props.userID;
        axios.get(url)
        .then( response => {
            // handle success
            let userEvents = response.data;
            userEvents = userEvents.map(element => {
                //parse data wanted into object
                let editedTime = moment(element.time).format('LLLL');
                var eventItem = {                       
                    event: element.event,
                    time: editedTime,
                    location: element.location
                }
                return eventItem;
            });
            //update state
            this.setState({eventsList: userEvents});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    

    componentDidMount() {
        this.myEventsSetState();
    }
        
    render() {
        //console.log(this.state.eventsList)
        
    return (
        <div className="nav-button">
        <button type="button" className="btn btn-primary fixed-btn1" data-toggle="modal" data-target="#exampleModal2">
        <i className="far fa-calendar-check"></i> my events
        </button>

        <CreateEventBtn 
            userID = {this.props.userID}
            myEventsSetState = {this.myEventsSetState} 
        />

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
            <table className="event-header">
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Time</th> 
                        <th>Location</th>
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
                <button type="button" className="btn btn-primary" data-dismiss="modal">Submit</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
    }
}

export default MyEventsBtn;