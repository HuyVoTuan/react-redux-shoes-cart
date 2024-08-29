import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducer } from "../state/cart.reducer";

const rootReducers = combineReducers({
  cart: cartReducer,
})

export const store = createStore(
  rootReducers,
  composeWithDevTools()
)
