import React, { Component } from "react";
import PropTypes from "prop-types";

class Tags extends Component {
  render() {
    return (
      <div className="Tags-container">
        {this.props.tags.map(tag => {
          return <p className="Tags-tag">{tag}</p>;
        })}
      </div>
    );
  }
}

Tags.propTypes = {
  tags: PropTypes.array
};

export default Tags;
