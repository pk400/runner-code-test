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
      {/* <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="item active">
            <img src={'/images/' + thumbnails[0]} alt="Los Angeles" />
          </div>

          <div class="item">
            <img src={'/images/' + thumbnails[1]} alt="Chicago" />
          </div>

          <div class="item">
            <img src={'/images/' + thumbnails[2]} alt="New York" />
          </div>
        </div>

        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> */}
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
