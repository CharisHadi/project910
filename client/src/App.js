import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
import Slide from "./components/Slide/Slide";
import LearnContainer from "./components/LearnContainer/LearnContainer";
import Game from "./components/Game";
import Map from "./components/Map/Map";
import MyEventsBtn from "./components/Buttons/MyEventsBtn/MyEventsBtn";
import CreateEventBtn from "./components/Buttons/CreateEventBtn/CreateEventBtn";
import "./App.css";

const MapWrapped = withScriptjs(withGoogleMap(Map));

class App extends Component {
    state = {
      loggedIn: false,
      userID: "00000000000",
      name: "test_user"
    }
  

  setLogIn = () => {
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    console.log("Addp.js: " + this.setLogIn);

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Nav 
          loggedIn={this.state.loggedIn} 
          setLogIn={this.setLogIn}
        />
        <Logo />
        <Slide />
        <LearnContainer />
      <MapWrapped 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `90%`, width: `80%`, position: `absolute`, top: `205%`, right: `10%` }} />}
        containerElement={<div style={{ height: `90%`, width: `80%`, position: `absolute`, top: `205%`, right: `10%` }} />}
        mapElement={<div style={{ height: `90%` }} />}
      />
      <Game />
      <MyEventsBtn />
      <CreateEventBtn 
        userID = {this.state.userID}
      />
    </div>
  );
}
}
export default App;