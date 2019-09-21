import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from "axios";
import "./styles.css";

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [{lat: 45.524404, lng: -122.693},
              {event: 'bottle drop', time: '', description: '', latitude: 45.520565, longitude: -123.094},
              {event: 'bottle drop', time: '', description: '', latitude: 45.416228, longitude: -122.792},
              {event: 'bottle drop', time: '', description: '', latitude: 45.486997, longitude: -122.773},
              {event: 'bottle drop', time: '', description: '', latitude: 45.592372, longitude: -122.678},
              {event: 'bottle drop', time: '', description: '', latitude: 45.447247, longitude: -122.601},
              {event: 'bottle drop', time: '', description: '', latitude: 45.528003, longitude: -122.535},
              {event: 'bottle drop', time: '', description: '', latitude: 45.536971, longitude: -122.423},
              {event: 'bottle drop', time: '', description: '', latitude: 45.498444, longitude: -122.418},
              {event: 'bottle drop', time: '', description: '', latitude: 44.957031, longitude: -123.032},
              {event: 'bottle drop', time: '', description: '', latitude: 44.952902, longitude: -122.984},
              {event: 'bottle drop', time: '', description: '', latitude: 44.88588, longitude: -123.033},
              {event: 'bottle drop', time: '', description: '', latitude: 44.576066, longitude: -123.26},
              {event: 'bottle drop', time: '', description: '', latitude: 44.633667, longitude: -123.079},
              {event: 'bottle drop', time: '', description: '', latitude: 44.635959, longitude: -124.051},
              {event: 'bottle drop', time: '', description: '', latitude: 44.050294, longitude: -123.125},
              {event: 'bottle drop', time: '', description: '', latitude: 45.841021, longitude: -119.302},
              {event: 'bottle drop', time: '', description: '', latitude: 44.027762, longitude: -116.944}]
    }
  }

  componentDidMount() {        
    axios.get("/api/getEvents/")
      .then( response => {
        // handle success
        let userEvents = response.data;
        userEvents = userEvents.map(element => {
            //parse data wanted into object
            var eventItem = {                       
                event: element.event,
                time: element.time,
                description: element.description,
                latitude: element.latitude,
                longitude: element.longitude
            }
            return eventItem;
        });
        //update state
        
       console.log(userEvents);
        this.setState({markers: userEvents});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
      }

  displayMarkers = () => {
    return this.state.markers.map((marker, index) => {
      return <Marker key={index} id={index} position={{
       lat: marker.latitude,
       lng: marker.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    const mapStyles = {
      width: '90%',
      height: '550px',
      position: 'absolute',
      top: '215%',
      left: '5%'
    };

    return (
      <div>
          <Map
            google={this.props.google}
            zoom={8}
            style={ mapStyles }
            initialCenter={{ lat: 45.5051, lng: -122.6750}}
          >
            {this.displayMarkers()}
          </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDN0HqESdiMiO9XCjtQ_wMgWj38uUEZ7d4'
})(MapContainer);