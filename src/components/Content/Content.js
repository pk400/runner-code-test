import axios from 'axios';
import React, {useState} from 'react';

import Button from '../../atoms/Button/Button';
import ColorBox from '../../atoms/ColorBox/ColorBox';
import Favourite from '../../atoms/Favourite/Favourite';
import Gallery from '../../components/Gallery/Gallery';
import ProductNav from '../../components/ProductNav/ProductNav';
import Star from '../../atoms/Star/Star';
import Tag from '../../atoms/Tag/Tag';

import './Content.css';

const Content = () => {
  const product = {
    "id": 1,
    "title": "Black Valentino dress with tulle",
    "average_rating": 4,
    "number_of_reviews": 132,
    "tags": [
      "popular"
    ],
    "info": "Dress with tulle and collar Peter Pand from REDValentino (Red Valentino). Peter Pan collar, tulle panels, sleeveless model, concealed back zipper and pleated skirt.",
    "brand": "Red Valentino is a highly reputable brand that began in the early 90s and has shown itself to be a true show stopper.",
    "delivery": "This product has same-day shipping available.",
    "sizes": [
      "XS",
      "S",
      "M"
    ],
    "colors": [
      "black",
      "blue",
      "teal"
    ]
  }
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(1)
  const ratings = []
  const averageRating = product.average_rating
  for (let activeCounter = 0; activeCounter < 5; activeCounter++) {
    ratings.push(<Star active={activeCounter < averageRating} />)
  }
  return (
    <div className="content-container">
      <div className="content-left">
        <Gallery productId={product.id} />
      </div>
      <div className="content-right">
        <div className="tag-favourite-row">
          <div className="tags">
            {product.tags?.map(tag_name => <Tag>{tag_name}</Tag>)}
          </div>
          <div className="favourite-button">
            <Favourite />
          </div>
        </div>
        <div className="product-right">
          <h1 className="product-title">{product.title}</h1>
          <div className="ratings-row">
            {ratings}
            <span>{product.number_of_reviews} reviews</span>
          </div>
          <ProductNav
            data={{
              info: product.info,
              brand: product.brand,
              delivery: product.delivery}}
            selected='info' />
          <div className="size-color-row">
            <div className="size-column">
              <div className="row-headings">
                <span>Size</span>
                <a href="">Size Guide</a>
              </div>
              <div className="sizes">
                {product.sizes.map((size, index) =>
                  <Button
                    onClick={() => setSelectedSize(index)}
                    selected={selectedSize === index}>
                      {size}
                  </Button>)}
              </div>
            </div>
            <div className="color-column">
              <div className="row-headings">
                <span>Color</span>
              </div>
              <div className="colors">
                {product.colors.map(color =>
                  <ColorBox
                    onClick={() => setSelectedColor(color)}
                    color={color}
                    selected={selectedColor === color} />)}
              </div>
            </div>
          </div>
          <div class="price-addcart-row">
            <div className="price">
              <span className="currency-symbol"><sup>$</sup></span>
              <span className="value">788</span>
            </div>
            <div className="addcart">
              <Button selected>Add To Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;
