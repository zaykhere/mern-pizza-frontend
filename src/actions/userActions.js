import axios from "axios";
import {
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const response = await axios.post("/api/users/register",  user );
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
