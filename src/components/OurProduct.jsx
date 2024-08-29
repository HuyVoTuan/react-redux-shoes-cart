import React from 'react'
import ImageRound from './ImageRound'
import Typography from './Typography'
import Button from './Button'

import { data } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../state/cart.actions'

function OurProduct() {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.carts);

  return (
    <div className="cardBody">
      {data.map(item => {
        const isDisabled = carts.some(cart => cart.id === item.id);
        function _addToCart() {
          const product = {
            id: item.id,
            image: item.image,
            name: item.name,
            price: item.price,
            quantity: 1
          }
          dispatch(addToCart(product))
        }
        return (
          <div className="shopItem" key={item.id}>
            <ImageRound 
              className="shopItem_image"
              src={item.image}
              color={item.color}
            />
  
            <Typography 
              className="shopItem_name"
              text={item.name}
            />
  
            <Typography 
              className="shopItem_description"
              text={item.description}
            />
  
            <div className="shopItem_bottom">
              <Typography 
                className="shopItem_price"
                text={"$" + item.price}
              />
              
              <Button 
                text="ADD TO CART"
                disabled={isDisabled}
                // onClick={() => {
                //   const product = {
                //     id: item.id,
                //     image: item.image,
                //     name: item.name,
                //     price: item.price,
                //     quantity: 1
                //   }
                //   dispatch(addToCart(product))
                // }}
                onClick={isDisabled ? () => {} : () => _addToCart()}
                // onClick={() => _addToCart()}
              />
            </div>
          </div>
        )
      })}
      
      
    </div>
  )
}

export default OurProduct