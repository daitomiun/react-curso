import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "producto 1", price: 100 },
    { id: 2, name: "producto 2", price: 100 },
    { id: 3, name: "producto 3", price: 100 },
    { id: 4, name: "producto 4", price: 100 },
    { id: 5, name: "producto 5", price: 100 },
    { id: 6, name: "producto 6", price: 100 },
    { id: 7, name: "producto 7", price: 100 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
}
