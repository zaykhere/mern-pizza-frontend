import axios from "axios";
import {
  GET_PIZZAS_FAILED,
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
} from "../constants/pizzaConstants";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: GET_PIZZAS_REQUEST });
  try {
    const response = await axios.get("/api/pizza");

    dispatch({ type: GET_PIZZAS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PIZZAS_FAILED, payload: error.message });
  }
};

export const filterPizzas = (searchKey, category) => async (dispatch) => {
  let filteredPizzas;
  searchKey = searchKey.toLowerCase();
  dispatch({ type: GET_PIZZAS_REQUEST });
  try {
    const response = await axios.get("/api/pizza");
    filteredPizzas = response.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchKey)
    );

    if(category!=="all") {
      filteredPizzas = response.data.filter((pizza) =>
      pizza.category.toLowerCase()==category
    );
    }

    dispatch({ type: GET_PIZZAS_SUCCESS, payload: filteredPizzas });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PIZZAS_FAILED, payload: error.message });
  }
};
