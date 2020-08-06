import React from 'react';

import './ColorBox.css';

const ColorBox = ({
  selected=false,
  color
}) => {
  return (
    <div className={"color-box-outer" + (selected ? " with-border" : "")}>
      <div
        className="color-box-inner"
        style={{
          backgroundColor: color
        }} />
    </div>
  )
}

export default ColorBox;