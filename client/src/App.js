import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
import Slide from "./components/Slide/Slide";
import LearnContainer from "./components/LearnContainer/LearnContainer";
import Game from "./components/Game";
import GoogleApiWrapper from "./components/Map/Map";
import "./App.css";

class App extends Component {
    state = {
      loggedIn: true,
      userID: "0000000000",
      name: "test_user",
      latitude: 44.949,
      longitude:  -123.035,
      location: ""
    }

  setLogIn = (res) => {
    this.setState({
      loggedIn: true,
      userID: res.fbid,
      name: res.name,
      latitude: res.latitude,
      longitude: res.longitude,
      location: res.location
    });
    console.log(this.state);
  };

  setLogOut = () => {
    this.setState({
      loggedIn: false,
      userID: null,
      name: null
    });
    console.log(this.state);
  };

  render() {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Nav 
          name={this.state.name}
          loggedIn={this.state.loggedIn} 
          setLogIn={this.setLogIn}
          setLogOut={this.setLogOut}
          userID={this.state.userID}
        />
        <Logo />
        <Slide />
        <LearnContainer />
        <div id="map-start"></div>
        
        <GoogleApiWrapper 
          latitude={this.state.latitude}
          longitude={this.state.longitude} 
          userID={this.state.userID}       
        />
        <Game />
    </div>
  );
}
}
export default App;