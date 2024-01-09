import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

import 'maplibre-gl/dist/maplibre-gl.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    );
  }
}

export default App;
