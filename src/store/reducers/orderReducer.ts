import cleanSet from "clean-set"
import { OrderState } from "interfaces"
import { ADD_PIZZA_TO_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_PIZZA_FROM_CART } from "store/constants"

interface orderAction {
  type: string,
  payload?: any
}

const initialState: OrderState = {
  pizza: []
}

export default function orderReducer (state = initialState, action: orderAction) {
  switch (action.type) {
    case ADD_PIZZA_TO_CART:
      return cleanSet(state, 'pizza', [...state.pizza, action.payload ])
    case REMOVE_PIZZA_FROM_CART:
      return { ...state, pizza: state.pizza.filter(item => item !== action.payload)}
    case PLUS_CART_ITEM: {
      const pizzaIndex = state.pizza.findIndex(item => item.id === action.payload)
      return cleanSet(state, `pizza.${pizzaIndex}.amount`, state.pizza[pizzaIndex].amount + 1)
    }
    case MINUS_CART_ITEM: {
      const pizzaIndex = state.pizza.findIndex(item => item.id === action.payload)
      if (state.pizza[pizzaIndex]?.amount === 1) return cleanSet(state, `pizza`, state.pizza.filter(item => item.id !== action.payload))
      return cleanSet(state, `pizza.${pizzaIndex}.amount`, state.pizza[pizzaIndex]?.amount - 1)
    }
    case CLEAR_CART: {
      console.log('clear');

      return cleanSet(state, 'pizza', [])
    }
    default:
      return state
  }
}
