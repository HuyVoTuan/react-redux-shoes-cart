import React from 'react'
import ImageRound from './ImageRound'
import Typography from './Typography'
import Controls from './Controls'
import { useSelector } from 'react-redux'

/*
[
 {
   id: 1,
   image:?,
   name: ?,
   price: ?,
   quantity: ? 
 }
]

*/

function Cart() {
  const carts = useSelector(state => state.cart.carts);

  return (
    <>
      {carts.length  === 0 ? 'Please add to cart' : (
        <>
          {carts.map(cart => (
            <div className="cardItem" key={cart.id}>
              <div className="cardItem_left">
                <ImageRound 
                  className="cardItem_image"
                  src={cart.image}
                />
              </div>
              <div className="cardItem_right">
                <Typography 
                  className="cardItem_name"
                  text={cart.name}
                />
    
                <Typography 
                  className="cardItem_price"
                  text={"$" + cart.price}
                />
    
                <Controls quantity={cart.quantity} cardId={cart.id} />
              </div>
            </div>
          ))}
        </>
      )}
    </>
    
  )
}

export default Cart