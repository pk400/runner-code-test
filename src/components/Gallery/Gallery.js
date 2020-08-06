import React, { useState } from 'react';

import './Gallery.css';

const Gallery = ({
  productId
}) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const thumbnails = [
    "imageDressPrimary.jpg",
    "imageThumb1.jpg",
    "imageThumb4.jpg",
    "Bitmap.jpg",
    "imageThumb1.jpg",
  ]
  return (
    <div>
      <div className="primaryDisplay">
        <img className="arrow-left" src="/images/iconArrowLeft.svg" alt="Gallery arrow left" />
        <img className="selected-image" src="/images/imageDressPrimary.jpg" alt="Black dress" />
        <img className="arrow-right" src="/images/iconArrowRight.svg" alt="Gallery arrow right" />
      </div>
      <div className="thumbnails-container">
        <div className="thumbnails">
          {thumbnails.map((thumbnail, index) =>
            <div className={(selectedImage === index ? " selected-thumbnail" : "")}>
              <img
                className="thumbnail"
                src={"/images/" + thumbnail}
                height={75 + "px"} />
              </div>)}
        </div>
        <img className="thumbnail-arrow-right" src="/images/iconArrowRight.svg" alt="Gallery arrow right" />  
      </div>
    </div>
  )
}

export default Gallery;