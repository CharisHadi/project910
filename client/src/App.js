import React from "react";
import {
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
import Slide from "./components/Slide/Slide";
import LearnContainer from "./components/LearnContainer/LearnContainer";
import Game from "./components/Game";
// import Map from "./components/Map/Map";
import CreateEventBtn from "./components/EventBtn/CreateEventBtn";

const MapWrapped = withScriptjs(withGoogleMap(Map));

function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Nav />
      <Logo />
      <Slide />
      <LearnContainer />
      <Game />
      <CreateEventBtn />
    </div>
  );
}

//       <MapWrapped
// googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
// loadingElement={<div style={{ height: `400px`, width: `100%` }} />}
// Element={<div style={{ height: `400px`, width: `100%` }} />}
// mapElement={<div style={{ height: `400px`, width: `100%` }} />}
// />

export default App;