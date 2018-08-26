import React, { Component } from "react";
import Image from "./Image";

import Image1 from "../assets/DSC_4055.JPG";
import Image2 from "../assets/IMG_0563.JPG";
import Image3 from "../assets/IMG_1897.jpg";
import Image4 from "../assets/IMG_1797.JPG";

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery-container">
        <Image orientation="portrait" src={Image1} />
        <Image src={Image2} />
        <Image src={Image3} />
        <Image src={Image2} />
        <Image orientation="portrait" src={Image4} />
        <Image src={Image3} />
      </div>
    );
  }
}

export default Gallery;
