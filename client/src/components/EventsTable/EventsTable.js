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
        </tr>
        )
    }
}
export default EventsTable;