import React, { Component } from "react";
import PropTypes from "prop-types";
import ModalPhotoContent from "./ModalPhotoContent";
import Image from "./Image";
import { photoData } from "../util/photoData";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: this.shuffle(Object.values(photoData)),
      photo: {},
      modalOpen: false
    };
  }

  //Fisher-Yates (aka Knuth) Shuffle
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

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
        {this.state.photos.filter(photo => showAll || this.tagged(activeTags, photo.tags))
          .map(photo => {
            return (
              <Image
                alt={photo.description}
                key={photo.id}
                onClick={() => this.selectPhoto(photo)}
                orientation={photo.orientation}
                rotate={photo.rotate}
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
