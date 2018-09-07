import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

class ModalPhotoContent extends Component {
  componentWillMount() {
    document.addEventListener("click", this.props.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.props.onClick);
  }

  render() {
    const { onClick, photo } = this.props;
    return (
      <div className="Overlay">
        <div className="Modal-container">
          <img
            alt={photo.description}
            className={cx(
              "Modal",
              { "Modal-landscape": photo.orientation === "landscape" },
              { "Modal-portrait": photo.orientation === "portrait" },
              { "Modal-rotate": photo.rotate }
            )}
            onClick={onClick}
            src={process.env.PUBLIC_URL + `/photos/${photo.filename}`}
          />
        </div>
      </div>
    );
  }
}

ModalPhotoContent.propTypes = {
  onClick: PropTypes.func,
  photo: PropTypes.object
};

export default ModalPhotoContent;
