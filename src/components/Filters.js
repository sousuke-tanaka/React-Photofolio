import React, { Component } from "react";

class Filters extends Component {
  render() {
    const tags = ["colorado", "stars", "banff"];
    return (
      <div className="Filters-container">
        {tags.map(tag => {
          return <div className="Filters-tag">{tag}</div>;
        })}
      </div>
    );
  }
}

export default Filters;
