import axios from "axios";
import {
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED
} from "../constants/userConstants";
import api from "../api";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const response = await axios.post(`${api}/api/users/register`,  user );
    if(response.data.success) {
      dispatch({ type: USER_REGISTER_SUCCESS });
    }
    
  } catch (error) {
    if(error.response && error.response.data) {
      console.log(error.response.data.error);
      dispatch({ type: USER_REGISTER_FAILED, payload: error.response.data.error });
    }
    else {
    dispatch({ type: USER_REGISTER_FAILED, payload: error.message });
    }
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({type: USER_LOGIN_REQUEST});
  try {
    const response = await axios.post(`${api}/api/users/login`, user);
    if(response.data.token) {
      dispatch({type: USER_LOGIN_SUCCESS, payload: response.data});
      localStorage.setItem('userInfo', JSON.stringify(response.data));
    }
  } catch (error) {
    if(error.response && error.response.data) {
      dispatch({ type: USER_LOGIN_FAILED, payload: error.response.data.error });
    }
    else {
    dispatch({ type: USER_LOGIN_FAILED, payload: error.message });
    }
  }
}

export const logoutUser = () => async(dispatch) => {
  localStorage.removeItem("userInfo");
  window.location.href="/login";
}

export const getAllUsers = () => async (dispatch, getState) => {
  let currentUser = getState().loginUserReducer.userInfo.token;
  let userToken = `Bearer ${currentUser}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  };
  dispatch({ type: GET_USERS_REQUEST });
  try {
    const response = await axios.get(`${api}/api/users/allusers`, config);

    dispatch({ type: GET_USERS_SUCCESS, payload: response.data.users });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_USERS_FAILED, payload: error.message });
  }
};
