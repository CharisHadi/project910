import React from "react";
import "./style.css";

class EventsTable extends React.Component { 
    

    render() {
        console.log(this.props);

        return (
        <tr>
            <td>{this.props.event}</td>
            <td>{this.props.time}</td> 
            <td>{this.props.location}</td>
            <td>
                <button className="button muted-button">Edit</button>
                <button className="button muted-button">Delete</button>
            </td>
        </tr>
        )
    }
}
export default EventsTable;