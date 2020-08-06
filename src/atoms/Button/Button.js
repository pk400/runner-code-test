import React from 'react';

import './Button.css';

const Button = ({
  children,
  onClick,
  selected=false
}) => {
  return (
    <button
      onClick={onClick}
      className={selected ? "button-selected" : "button-not-selected"}>
      {children}
    </button>
  )
}

export default Button;
