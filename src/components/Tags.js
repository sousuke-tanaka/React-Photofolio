import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

class Tags extends Component {
  render() {
    const { handleTagClick, tags } = this.props;

    return (
      <div className="Tags-container">
        <span className="Tags-title">tags:</span>
        {Object.keys(tags).map(tag => {
          console.log(tag);
          return (
            <button
              className={cx("Tags-tag", { "Tags-active": tags[tag] })}
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
