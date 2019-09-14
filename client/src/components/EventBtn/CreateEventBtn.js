import React from "react";
import EventForm from "../EventForm/EventForm";
import "./styles.css";

function CreateEventBtn() {
    return (
        <div className="nav-button">
            <button type="button" class="btn btn-primary fixed" data-toggle="modal" data-target="#exampleModal1">
            create event
            </button>

            <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create an Event</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <EventForm />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Add Event</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CreateEventBtn;