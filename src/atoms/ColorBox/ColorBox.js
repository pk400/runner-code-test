import React from 'react';

import './ColorBox.css';
import Config from '../../config.json';

const ColorBox = ({
  selected=false,
  onClick,
  color
}) => {
  return (
    <div
      onClick={onClick}
      className={"color-box-outer" + (selected ? " with-border" : "")}>
      <div
        className="color-box-inner"
        style={{
          backgroundColor: Config.color_map[color]
        }} />
    </div>
  )
}

export default ColorBox;
