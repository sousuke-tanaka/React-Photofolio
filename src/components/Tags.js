import React, { Component } from "react";
import PropTypes from "prop-types";

class Tags extends Component {
  render() {
    const { handleTagClick, tags } = this.props;

    return (
      <div className="Tags-container">
        {Object.keys(tags).map(tag => {
          return (
            <button
              className="Tags-tag"
              key={tag}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    );
  }
}

Tags.propTypes = {
  handleTagClick: PropTypes.func,
  tags: PropTypes.object
};

export default Tags;
