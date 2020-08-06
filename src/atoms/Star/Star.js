import React from 'react';

import './Star.css';

const Star = ({
  active=false
}) => {
  return <img
    className={active ? "active-star" : "inactive-star"}
    src="/images/iconActiveStar.svg"
    alt={active ? "Active star" : "Inactive star"} />
}

export default Star;