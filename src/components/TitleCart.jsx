import React from 'react'
import { useSelector } from 'react-redux';

function TitleCart() {
  const carts = useSelector(state => state.cart.carts);

  return (
    <div className="cardTop">
      <img
        alt=""
        src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
      />
      <div>Total: {carts.length}</div>
    </div>
  )
}

export default TitleCart