import { GET_PIZZAS_FAILED, GET_PIZZAS_REQUEST, GET_PIZZAS_SUCCESS } from "../constants/pizzaConstants";

export const getAllPizzasReducer = (state={}, action) => {
    switch(action.type) {
        case GET_PIZZAS_REQUEST:
            return {...state}
        case GET_PIZZAS_SUCCESS:
            return {pizzas: action.payload, ...state}    
        case GET_PIZZAS_FAILED:
            return {error: action.payload, ...state}
        default:
            return {...state}        
    }
}