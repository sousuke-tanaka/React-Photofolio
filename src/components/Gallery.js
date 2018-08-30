import React, { Component } from "react";
import PropTypes from "prop-types";
import ModalPhotoContent from "./ModalPhotoContent";
import Image from "./Image";
import { photoData } from "../util/photoData";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: {},
      modalOpen: false
    };
  }

  selectPhoto = photo => {
    this.setState({ photo }, this.toggleModal);
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  tagged = (activeTags, photoTags) => {
    return photoTags.filter(tag => -1 !== activeTags.indexOf(tag)).length !== 0;
  };

  render() {
    const { showAll, tags } = this.props;
    const activeTags = Object.keys(tags).filter(tag => tags[tag]);
    return (
      <div className="Gallery-container">
        {Object.values(photoData)
          .filter(photo => showAll || this.tagged(activeTags, photo.tags))
          .map(photo => {
            return (
              <Image
                alt={photo.description}
                key={photo.id}
                onClick={() => this.selectPhoto(photo)}
                orientation={photo.orientation}
                src={process.env.PUBLIC_URL + `/photos/${photo.filename}`}
                tags={photo.tags}
              />
            );
          })}
        {this.state.modalOpen && (
          <ModalPhotoContent
            onClick={this.toggleModal}
            photo={this.state.photo}
          />
        )}
      </div>
    );
  }
}

Gallery.propTypes = {
  showAll: PropTypes.bool,
  tags: PropTypes.object
};

export default Gallery;
