import React from "react";
import "./style.css";

class EventsTable extends React.Component { 
    

    render() {
        console.log(this.props);

        return (
        <tr>
            <tb>{this.props.event}</tb>
            <tb>{this.props.time}</tb> 
            <tb>{this.props.location}</tb>
        </tr>
        )
    }
}
export default EventsTable;