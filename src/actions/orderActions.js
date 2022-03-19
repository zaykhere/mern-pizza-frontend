import axios from "axios";
import { DELETE_ALL_FROM_CART } from "../constants/cartConstants";
import {
  GET_USER_ORDERS_FAILED,
  GET_USER_ORDERS_REQUEST,
  GET_USER_ORDERS_SUCCESS,
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
    dispatch({type: DELETE_ALL_FROM_CART})
  } catch (error) {
    console.log(error);
    dispatch({ type: PLACE_ORDER_FAILED });
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  let currentUser = getState().loginUserReducer.userInfo.token;
  let userToken = `Bearer ${currentUser}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  };

  dispatch({type: GET_USER_ORDERS_REQUEST})  
  try {
    const response = await axios.get("/api/orders/myorders", config);
    if(response.data.success) {
    dispatch({type: GET_USER_ORDERS_SUCCESS, payload: response.data.orders})
    }
    else {
      dispatch({type: GET_USER_ORDERS_FAILED, payload: response.data.error})
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_USER_ORDERS_FAILED, payload: error.message});
  }
};
