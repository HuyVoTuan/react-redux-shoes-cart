import React from 'react'
import { useSelector } from "react-redux";

function PriceCart() {
  const carts = useSelector(state => state.cart.carts);
  const total = React.useMemo(() => {
    return carts.reduce((acc, curr) => acc += curr.quantity * curr.price, 0)
  }, [carts])

  return (
    <span className="card_amount">${Math.round(total)}</span>
  )
}

export default PriceCart