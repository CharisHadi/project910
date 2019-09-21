import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
import Slide from "./components/Slide/Slide";
import LearnContainer from "./components/LearnContainer/LearnContainer";
import Game from "./components/Game";
import GoogleApiWrapper from "./components/Map/Map";
import MyEventsBtn from "./components/Buttons/MyEventsBtn/MyEventsBtn";
import CreateEventBtn from "./components/Buttons/CreateEventBtn/CreateEventBtn";
import "./App.css";

class App extends Component {
    state = {
      loggedIn: false,
      userID: "00000000000",
      name: "test_user"
    }
  

  setLogIn = (res) => {
    this.setState({
      loggedIn: true,
      userID: res.id,
      name: res.name,
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
    console.log("Addp.js: " + this.setLogIn);

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Nav 
          loggedIn={this.state.loggedIn} 
          setLogIn={this.setLogIn}
          setLogOut={this.setLogOut}
        />
        <Logo />
        <Slide />
        <LearnContainer />
        <div id="map-start"></div>
      <GoogleApiWrapper />
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