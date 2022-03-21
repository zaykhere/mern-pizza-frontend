import axios from "axios";
import {
  ADD_PIZZA_FAILED,
  ADD_PIZZA_REQUEST,
  ADD_PIZZA_SUCCESS,
  EDIT_PIZZA_FAILED,
  EDIT_PIZZA_REQUEST,
  EDIT_PIZZA_SUCCESS,
  GET_PIZZAS_FAILED,
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
  GET_PIZZA_ID_FAILED,
  GET_PIZZA_ID_REQUEST,
  GET_PIZZA_ID_SUCCESS,
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

export const getPizzaById = (pizzaid) => async (dispatch) => {
  dispatch({ type: GET_PIZZA_ID_REQUEST });
  try {
    const response = await axios.get(`/api/pizza/${pizzaid}`);
    console.log(response.data.data);

    dispatch({ type: GET_PIZZA_ID_SUCCESS, payload: response.data.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PIZZA_ID_FAILED, payload: error.message });
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
    const response = await axios.post("/api/pizza/addpizza", { pizza }, config);
    console.log(response);
    dispatch({ type: ADD_PIZZA_SUCCESS });
  } catch (error) {
    console.log(error);
    dispatch({ type: ADD_PIZZA_FAILED, payload: error.message });
  }
};

export const editPizza = (pizza) => async (dispatch, getState) => {
  dispatch({ type: EDIT_PIZZA_REQUEST });
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
    const response = await axios.put(
      `/api/pizza/editpizza/${pizza.pizzaId}`,
      { pizza },
      config
    );
    console.log(response);
    dispatch({ type: EDIT_PIZZA_SUCCESS });
  } catch (error) {
    console.log(error);
    dispatch({ type: EDIT_PIZZA_FAILED, payload: error.message });
  }
};

export const deletePizza = (pizzaId) => async(dispatch, getState) => {
  let currentUser = getState().loginUserReducer.userInfo.token;
 
  let userToken = `Bearer ${currentUser}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: userToken,
    },
  };

  try {
    await axios.delete(`/api/pizza/${pizzaId}`, config);
    alert("Pizza Deleted Successfully");
    window.location.reload();
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
}