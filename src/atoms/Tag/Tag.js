import React from 'react';

import './Tag.css';

const Tag = ({
  children
}) => {
  return (
    <div className="tag-container">
      {children}
    </div>
  )
}

export default Tag;