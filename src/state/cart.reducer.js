export const initialState = {
  carts: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case "CART/ADD_TO_CART": {
      return {
        ...state,
        carts: [...state.carts, payload]
      }
    }
    case "CART/DELETE_CART": {
      const newCarts = [...state.carts];
      const index = newCarts.findIndex(cart => cart.id === payload.cardId)
      if(index === -1) {
        return {
          ...state,
        }
      }
      newCarts.splice(index, 1);
      return {
        ...state,
        carts: newCarts
      }
    }
    case "CART/INCREMENT_QUANTITY": {
      const newCarts = [...state.carts];
      const index = newCarts.findIndex(cart => cart.id === payload.cardId)
      if(index === -1) {
        return {
          ...state,
        }
      }
      newCarts[index].quantity += 1;
      return {
        ...state,
        carts: newCarts
      }
    }
    default:
      return state;
  }
}