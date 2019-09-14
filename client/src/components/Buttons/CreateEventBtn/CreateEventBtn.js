import React from "react";
import EventForm from "../../Forms/EventForm/EventForm";
import "./styles.css";

function CreateEventBtn() {
    return (
        <div className="nav-button">
            <button type="button" className="btn btn-primary fixed-btn2" data-toggle="modal" data-target="#exampleModal1">
            create event
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
                    <EventForm />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Add Event</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CreateEventBtn;