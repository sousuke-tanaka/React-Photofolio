import React, { Component } from "react";

import Tags from "./components/Tags";
import Gallery from "./components/Gallery";

import "./App.css";
import { photoData } from "./util/photoData";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tags: [
        ...new Set(
          [].concat.apply([], Object.values(photoData).map(photo => photo.tags))
        )
      ].reduce((accumulator, current) => {
        accumulator[current] = false;
        return accumulator;
      }, {})
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
