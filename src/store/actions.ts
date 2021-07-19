import {
  ADD_PIZZA_TO_CART,
  REMOVE_PIZZA_FROM_CART,
  CLEAR_CART,
  PLUS_CART_ITEM,
  MINUS_CART_ITEM,
} from "./constants"

export const addPizzaToCart = (pizza) => ({
  type: ADD_PIZZA_TO_CART,
  payload: pizza,
})

export const removePizzaFromCart = (id) => ({
  type: REMOVE_PIZZA_FROM_CART,
  payload: id,
})

export const clearCart = () => ({
  type: CLEAR_CART,
  payload: []
})


export const plusCartItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id,
})

export const minusCartItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id,
})
