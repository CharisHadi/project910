import React from "react";
import {
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
import Slide from "./components/Slide/Slide";
import Learn from "./components/Learn/Learn";
import Game from "./components/Game/";
import Events from "./components/Events/Events";
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
// import Map from "./components/Map";
// import { Input, TextArea, FormBtn } from "./components/Form";

const MapWrapped = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Nav />
      <Logo />
      <Slide />
      <Learn />
      <Game />
      <Events />
    </div>
  );
}

// <MapWrapped
// googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
// loadingElement={<div style={{ height: `400px`, width: `100%` }} />}
// containerElement={<div style={{ height: `400px`, width: `100%` }} />}
// mapElement={<div style={{ height: `400px`, width: `100%` }} />}
// <Input />
// <TextArea />
// <FormBtn>Submit Event</FormBtn>
// />

export default App;