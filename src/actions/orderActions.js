import axios from "axios";
import { DELETE_ALL_FROM_CART } from "../constants/cartConstants";
import {
  GET_ALL_ORDERS_FAILED,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_USER_ORDERS_FAILED,
  GET_USER_ORDERS_REQUEST,
  GET_USER_ORDERS_SUCCESS,
  PLACE_ORDER_FAILED,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
} from "../constants/orderConstants";
import api from "../api";

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
    const response = await axios.post(`${api}/api/orders/placeorder`, {
      token,
      subtotal,
      userToken,
      cartItems,
    }, config);
    console.log(response);
    dispatch({ type: PLACE_ORDER_SUCCESS });
    dispatch({type: DELETE_ALL_FROM_CART});
    localStorage.removeItem("cartItems");
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
    const response = await axios.get(`${api}/api/orders/myorders`, config);
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

export const getAllOrders = () => async (dispatch, getState) => {
  let currentUser = getState().loginUserReducer.userInfo.token;
  let userToken = `Bearer ${currentUser}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  };

  dispatch({type: GET_ALL_ORDERS_REQUEST})  
  try {
    const response = await axios.get(`${api}/api/orders`, config);
    if(response.data.success) {
    dispatch({type: GET_ALL_ORDERS_SUCCESS, payload: response.data.orders})
    }
    else {
      dispatch({type: GET_ALL_ORDERS_FAILED, payload: response.data.error})
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_ALL_ORDERS_FAILED, payload: error.message});
  }
};

export const deliverOrder = (orderId) => async(dispatch, getState) => {
  let currentUser = getState().loginUserReducer.userInfo.token;
  let userToken = `Bearer ${currentUser}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  };
  try {
    const response = await axios.put(`${api}/api/orders/deliver/${orderId}`, {}, config);
    if(response.data.success) {
    alert("Order Delivered");  
    const orderResponse = await axios.get(`${api}/api/orders`, config);  
    dispatch({type: GET_ALL_ORDERS_SUCCESS, payload: orderResponse.data.orders})
    }
    else {
      dispatch({type: GET_ALL_ORDERS_FAILED, payload: response.data.error})
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_ALL_ORDERS_FAILED, payload: error.message});
  }
}