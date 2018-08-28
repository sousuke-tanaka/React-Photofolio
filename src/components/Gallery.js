import React, { Component } from "react";
import Image from "./Image";
import { photoData } from "../util/photoData";

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery-container">
        {Object.values(photoData).map(photo => {
          return (
            <Image
              orientation={photo.orientation}
              src={process.env.PUBLIC_URL + `/photos/${photo.filename}`}
              tags={photo.tags}
            />
          );
        })}
      </div>
    );
  }
}

export default Gallery;
