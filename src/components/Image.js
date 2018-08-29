import React, { Component } from "react";
import PropTypes from "prop-types";

class Image extends Component {
  render() {
    const { alt, orientation, src } = this.props;
    return (
      <div className={`Image-container Image-${orientation}`}>
        <img alt={alt} className={"Image-photo"} src={src} />
      </div>
    );
  }
}

Image.defaultProps = {
  orientation: "landscape"
};

Image.propTypes = {
  orientation: PropTypes.string,
  src: PropTypes.string
};

export default Image;
