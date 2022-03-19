import axios from "axios";
import {
  PLACE_ORDER_FAILED,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
} from "../constants/orderConstants";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: PLACE_ORDER_REQUEST });

  let currentUser = getState().loginUserReducer.userInfo.token;
  let userToken = `Bearer ${currentUser}`;

  const cartItems = getState().cartReducer.cartItems;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  };

  try {
    const response = await axios.post("/api/orders/placeorder", {
      token,
      subtotal,
      userToken,
      cartItems,
    }, config);
    console.log(response);
    dispatch({ type: PLACE_ORDER_SUCCESS });
  } catch (error) {
    console.log(error);
    dispatch({ type: PLACE_ORDER_FAILED });
  }
};
