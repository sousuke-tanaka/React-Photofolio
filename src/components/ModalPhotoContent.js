import React, { Component } from "react";
import PropTypes from "prop-types";

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
            className={`Modal Modal-${photo.orientation}`}
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
