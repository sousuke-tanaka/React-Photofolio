import React, { Component } from "react";

import Tags from "./components/Tags";
import Gallery from "./components/Gallery";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tags: { colorado: false, stars: false, banff: false }
    };
  }

  handleTagClick = tag => {
    this.setState(prevState => ({
      tags: { ...prevState.tags, [tag]: !prevState.tags[tag] }
    }));
  };

  render() {
    const { tags } = this.state;
    const showAll = Object.values(tags).reduce((a, b) => a && !b, true);
    return (
      <div className="App">
        <Tags handleTagClick={this.handleTagClick} tags={tags} />
        <Gallery showAll={showAll} tags={tags} />
      </div>
    );
  }
}

export default App;
