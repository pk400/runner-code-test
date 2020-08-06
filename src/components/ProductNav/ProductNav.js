import React, { useState } from 'react';

import './ProductNav.css';

const ProductNav = ({
  data,
  selected
}) => {
  const [selectedNav, setSelectedNav] = useState(selected)
  return (
    <nav className="product-nav-container">
      <ul>
        {Object.keys(data).map(key =>
          <li
            className={selectedNav === key ? "selected" : "not-selected"}
            onClick={() => setSelectedNav(key)}><a href={"#" + key}>{key}</a></li>)}
      </ul>
      <div className="selected-content">
        {data[selectedNav]}
      </div>
    </nav>
  )
}

export default ProductNav;