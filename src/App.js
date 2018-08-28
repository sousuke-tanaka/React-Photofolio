import React, { Component } from "react";

import Tags from "./components/Tags";
import Gallery from "./components/Gallery";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tags: ["colorado", "stars", "banff"],
      activeTags: []
    };
  }
  render() {
    return (
      <div className="App">
        <Tags tags={this.state.tags} />
        <Gallery activeTags={this.state.activeTags} />
      </div>
    );
  }
}

export default App;
