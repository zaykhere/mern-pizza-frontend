import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {useDispatch} from "react-redux";
import {placeOrder} from "../actions/orderActions";

function Checkout({ subtotal }) {
  const dispatch = useDispatch();

  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }

  return (
    <div>
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
