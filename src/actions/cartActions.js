import { ADD_TO_CART, DELETE_FROM_CART } from "../constants/cartConstants";

export const addToCart =
  (pizza, quantity, varient) => async (dispatch, getState) => {
    let cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      varient: varient,
      quantity: Number(quantity) ,
      prices: pizza.prices,
      price: pizza.prices[0][varient] * quantity,
    };

    if(parseInt(cartItem.quantity)>10) {
      alert("You cannot add more than 10 quantities");
    }
    else {
      if(cartItem.quantity<1) {
        dispatch({type: DELETE_FROM_CART, payload: pizza});
      }
      else {
        dispatch({ type: ADD_TO_CART, payload: cartItem });
      }
    }
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
  };


export const deleteFromCart = (pizza) => async(dispatch, getState) => {
  dispatch({type: DELETE_FROM_CART, payload: pizza});

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}  