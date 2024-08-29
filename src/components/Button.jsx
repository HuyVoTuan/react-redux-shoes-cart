import React from 'react'

function Button({ onClick, disabled, text = 'Default' }) {
  return (
    <div className="shopItem_button" onClick={onClick} disabled={disabled}>
      <p>{text}</p>
    </div>
  )
}

export default Button