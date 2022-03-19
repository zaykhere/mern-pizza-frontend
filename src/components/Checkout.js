import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {useDispatch, useSelector} from "react-redux";
import {placeOrder} from "../actions/orderActions";
import Error from "./Error";
import Success from "./Success";
import Loading from "./Loading";

function Checkout({ subtotal }) {
  const dispatch = useDispatch();

  const orderState = useSelector((state)=> state.placeOrderReducer);
  const {loading, error, success} = orderState;

  function tokenHandler(token) {
    dispatch(placeOrder(token, subtotal));
  }

  return (
    <div>
      {loading && (<Loading />)}
      {error && (<Error error={error} />)}
      {success && (<Success success="Your order has been placed successfully" />)}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        stripeKey="pk_test_51HLMIgAe7e74HIRPcTj50N1suvT6EXHEamBVcLkFLQcHPmqbqMA1m9fSYAn5hngqm9kBzBaVUueUXxeEiby67HOm00JyjtNPyu"
        token={tokenHandler}
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout;
