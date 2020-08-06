import React, { useState, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import './Gallery.css';

const Gallery = ({
  productId
}) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const carousel = useRef(null)
  const thumbnails = [
    "imageDressPrimary.jpg",
    "imageThumb1.jpg",
    "imageThumb4.jpg",
    "Bitmap.jpg",
    "imageThumb1.jpg",
  ]
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    border: 'none',
    cursor: 'pointer',
  };
  return (
    <div className="gallery">
      <Carousel
        ref={carousel}
        onChange={(index) => setSelectedImage(index)}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}>
              <img src="/images/iconArrowLeft.svg" alt="Gallery arrow left" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15 }}>
              <img src="/images/iconArrowRight.svg" alt="Gallery arrow right" />
            </button>
          )
        }>
        {thumbnails.map((thumbnail, index) =>
          <div>
            <img src={"/images/" + thumbnail}/>
          </div>)}
      </Carousel>
      <div className="thumbnails-container">
        <div className="thumbnails">
          {thumbnails.map((thumbnail, index) =>
            <div
              onClick={() => {
                setSelectedImage(index)
                carousel.current.moveTo(index)
              }}
              className={(selectedImage === index ? " selected-thumbnail" : "")}>
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
