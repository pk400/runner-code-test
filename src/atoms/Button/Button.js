import React from 'react';

const Button = ({
  children,
  type='normal'
}) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default Button;