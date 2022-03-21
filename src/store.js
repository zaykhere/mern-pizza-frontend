import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllPizzasReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  editPizzaReducer,
} from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducers";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducers";
import {
  placeOrderReducer,
  getUserOrdersReducer,
  getAllOrdersReducer
} from "./reducers/orderReducers";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  editPizzaReducer: editPizzaReducer,
  getAllOrdersReducer: getAllOrdersReducer
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    userInfo: userInfo,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
