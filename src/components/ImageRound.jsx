import React from 'react'

function ImageRound({ src, className, color }) {
  return (
    <div
      className={className}
      style={{ backgroundColor: color || 'transparent' }}
    >
      <img
        alt=""
        src={src}
      />
    </div>
  )
}

export default ImageRound