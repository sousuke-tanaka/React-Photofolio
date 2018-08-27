import React, { Component } from "react";

import Filters from "./components/Filters";
import Gallery from "./components/Gallery";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filters />
        <Gallery />
      </div>
    );
  }
}

export default App;
