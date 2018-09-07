import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

class Image extends Component {
  render() {
    const { alt, onClick, orientation, rotate, src } = this.props;
    return (
      <div className={cx("Image-container", { "Image-rotate": rotate })}>
        <img alt={alt} className={"Image-photo"} onClick={onClick} src={src} />
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
