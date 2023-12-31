import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import arrowIconImg from "../assets/arrow-icon.svg";

class Tags extends Component {
  constructor() {
    super();

    this.state = {
      showTagMenu: true
    };
  }

  toggleTagMenu = () => {
    this.setState({ showTagMenu: !this.state.showTagMenu });
  };

  render() {
    const { handleTagClick, tags } = this.props;
    const { showTagMenu } = this.state;

    return (
      <React.Fragment>
        <div className="Tags-container Tags-container--desktop">
          <span className="Tags-title">filter by tags</span>
          <div className="Tags-group">
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
        </div>
        {showTagMenu ? (
          <div className="Tags-container Tags-container--mobile">
            <div>
              <img
                alt="Tag menu toggle"
                className="Tags-menuToggle"
                onClick={this.toggleTagMenu}
                src={arrowIconImg}
              />
            </div>
            <span className="Tags-title">filter by tags</span>
            <div className="Tags-group">
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
          </div>
        ) : (
          <div className="Tags-collapsedTagMenu Tags-container--mobile">
            <img
              alt="Tag menu toggle"
              className={cx("Tags-menuToggle", {
                "Tags-menuToggleCollapsed": !this.state.showTagMenu
              })}
              onClick={this.toggleTagMenu}
              src={arrowIconImg}
            />
            <span className="Tags-title">filter by tags</span>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Tags.propTypes = {
  handleTagClick: PropTypes.func,
  tags: PropTypes.object
};

export default Tags;
