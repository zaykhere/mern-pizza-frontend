import axios from "axios";
import {
  GET_PIZZAS_FAILED,
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
} from "../constants/pizzaConstants";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({type: GET_PIZZAS_REQUEST})  
  try {
    const response = await axios.get("/api/pizza");
    console.log(response);
    dispatch({type: GET_PIZZAS_SUCCESS, payload: response.data})
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PIZZAS_FAILED, payload: error.message});
  }
};
