import { ADD_TO_CART, DELETE_ALL_FROM_CART, DELETE_FROM_CART } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const alreadyExists = state.cartItems.find(
        (item) => item._id === action.payload._id && item.varient === action.payload.varient
      );
      if (alreadyExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    case DELETE_FROM_CART:
      function filterId(pizza) {
        return pizza.id != action.payload._id
      }

      function filterVarient(pizza) {
        return pizza.varient != action.payload.varient
      }

      return {
        ...state,
        cartItems: state.cartItems.filter(filterId).filter(filterVarient)
      };

    case DELETE_ALL_FROM_CART: 
      return {
        ...state,
        cartItems : []
      }  

    default:
      return state;
  }
};
