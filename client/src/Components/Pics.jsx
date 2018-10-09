import React, { Component } from "react";

import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: "/limo_images/limo1.jpg",
    thumbnail: "/limo_images/thumb_limo1.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 245,
    caption: "Limo on lake"
  },
  {
    src: "/limo_images/limo2.jpg",
    thumbnail: "/limo_images/thumb_limo2.jpg",
    thumbnailWidth: 317,
    thumbnailHeight: 245,
    caption: "Limo at Private Jet Center TIA"
  },

  {
    src: "/limo_images/limo3.jpg",
    thumbnail: "/limo_images/thumb_limo3.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 240,
    caption: "Limo on lake"
  },
  {
    src: "/limo_images/limo4.jpg",
    thumbnail: "/limo_images/thumb_limo4.jpg",
    thumbnailWidth: 317,
    thumbnailHeight: 245,
    caption: "Limo on lake"
  },
  {
    src: "/limo_images/limo5.jpg",
    thumbnail: "/limo_images/thumb_limo5.jpg",
    thumbnailWidth: 327,
    thumbnailHeight: 320,
    caption: "Limo at University of Tampa"
  },
  {
    src: "/limo_images/limo6.jpg",
    thumbnail: "/limo_images/thumb_limo6.jpg",
    thumbnailWidth: 323,
    thumbnailHeight: 237,
    caption: "Limo on Davis Island FL"
  },

  {
    src: "/limo_images/limo7.jpg",
    thumbnail: "/limo_images/thumb_limo7.jpg",
    thumbnailWidth: 809,
    thumbnailHeight: 321,
    caption: "Limo interior"
  },
  {
    src: "/limo_images/limo8.jpg",
    thumbnail: "/limo_images/thumb_limo8.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 240,
    caption: "Limo interior"
  },
  {
    src: "/limo_images/limo9.jpg",
    thumbnail: "/limo_images/thumb_limo9.jpg",
    thumbnailWidth: 411,
    thumbnailHeight: 215,
    caption: "Limo at storage"
  },
  {
    src: "/limo_images/limo10.jpg",
    thumbnail: "/limo_images/thumb_limo10.jpg",
    thumbnailWidth: 315,
    thumbnailHeight: 240,
    caption: "Limo interior"
  },

  {
    src: "/limo_images/limo11.jpg",
    thumbnail: "/limo_images/thumb_limo11.jpg",
    thumbnailWidth: 317,
    thumbnailHeight: 245,
    caption: "Limo interior"
  },
  {
    src: "/limo_images/limo12.jpg",
    thumbnail: "/limo_images/thumb_limo12.jpg",
    thumbnailWidth: 317,
    thumbnailHeight: 245,
    caption: "Limo Palm Beach FL"
  },
  {
    src: "/limo_images/limo13.jpg",
    thumbnail: "/limo_images/thumb_limo13.jpg",
    thumbnailWidth: 317,
    thumbnailHeight: 245,
    caption: "Limo Palm Beach FL"
  },
  {
    src: "/limo_images/limo14.jpg",
    thumbnail: "/limo_images/thumb_limo14.jpg",
    thumbnailWidth: 317,
    thumbnailHeight: 245,
    caption: "Limo Palm Beach FL"
  },

  {
    src: "/limo_images/limo15.jpg",
    thumbnail: "/limo_images/thumb_limo15.jpg",
    thumbnailWidth: 519,
    thumbnailHeight: 246,
    caption: "Limo side view"
  },
  {
    src: "/limo_images/limo16.jpg",
    thumbnail: "/limo_images/thumb_limo16.jpg",
    thumbnailWidth: 492,
    thumbnailHeight: 240,
    caption: "Limo side view"
  },
  {
    src: "/limo_images/limo17.jpg",
    thumbnail: "/limo_images/thumb_limo17.jpg",
    thumbnailWidth: 317,
    thumbnailHeight: 245,
    caption: "Limo"
  },
  {
    src: "/limo_images/limo18.jpg",
    thumbnail: "/limo_images/thumb_limo18.jpg",
    thumbnailWidth: 396,
    thumbnailHeight: 244,
    caption: "Drivers side view of limo"
  },

  {
    src: "/limo_images/limo19.jpg",
    thumbnail: "/limo_images/thumb_limo19.jpg",
    thumbnailWidth: 315,
    thumbnailHeight: 240,
    caption: "Tailgate University of Florida"
  },
  {
    src: "/limo_images/limo20.jpg",
    thumbnail: "/limo_images/thumb_limo20.jpg",
    thumbnailWidth: 319,
    thumbnailHeight: 241,
    caption: "Limo on lake"
  },
  {
    src: "/limo_images/limo21.jpg",
    thumbnail: "/limo_images/thumb_limo21.jpg",
    thumbnailWidth: 463,
    thumbnailHeight: 245,
    caption: "Limo at Private Jet Center TIA"
  },
  {
    src: "/limo_images/limo1.jpg",
    thumbnail: "/limo_images/thumb_limo1.jpg",
    thumbnailWidth: 317,
    thumbnailHeight: 184,
    caption: "Limo on lake"
  }
];

class Pics extends Component {
  render() {
    return (
      <div className="gallery">
        <Gallery images={IMAGES} />,
      </div>
    );
  }
}

export default Pics;
