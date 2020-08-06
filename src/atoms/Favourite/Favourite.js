import React, { useState } from 'react';

import './Favourite.css';

const Favourite = () => {
  const [selected, setSelected] = useState(false)
  return (
    <img
      src="/images/iconFavourite.svg"
      alt="Favourite button"
      className={selected ? "favourite-selected" : ""}
      onClick={() => setSelected(!selected)} />
  )
}

export default Favourite;
