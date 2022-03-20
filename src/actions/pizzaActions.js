import axios from "axios";
import {
  ADD_PIZZA_FAILED,
  ADD_PIZZA_REQUEST,
  ADD_PIZZA_SUCCESS,
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

    if (category !== "all") {
      filteredPizzas = response.data.filter(
        (pizza) => pizza.category.toLowerCase() == category
      );
    }

    dispatch({ type: GET_PIZZAS_SUCCESS, payload: filteredPizzas });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PIZZAS_FAILED, payload: error.message });
  }
};

export const addPizza = (pizza) => async (dispatch, getState) => {
  dispatch({ type: ADD_PIZZA_REQUEST });
  let currentUser = getState().loginUserReducer.userInfo.token;
  let isAdmin = getState().loginUserReducer.userInfo.isAdmin;
  if (!isAdmin)
    return dispatch({
      type: ADD_PIZZA_FAILED,
      payload: "You are not allowed to add a pizza",
    });
  let userToken = `Bearer ${currentUser}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  };
  try {
    const response = await axios.post("/api/pizza/addpizza", {pizza}, config);
    console.log(response);
    dispatch({type: ADD_PIZZA_SUCCESS});
  } catch (error) {
    console.log(error);
    dispatch({ type: ADD_PIZZA_FAILED, payload: error.message });
  }
};
