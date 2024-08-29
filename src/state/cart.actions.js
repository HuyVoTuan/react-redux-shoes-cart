export const addToCart = (cart = {}) => {
  return {
    type: 'CART/ADD_TO_CART',
    payload: cart
  }
}

export const deleteCart = (cardId) => {
  return {
    type: 'CART/DELETE_CART',
    payload: {
      cardId
    }
  }
}

export const incrementQuantity = (cardId) => {
  return {
    type: 'CART/INCREMENT_QUANTITY',
    payload: {
      cardId
    }
  }
}
