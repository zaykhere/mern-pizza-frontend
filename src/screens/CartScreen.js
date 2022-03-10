import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../actions/cartActions";

function CartScreen() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;

  const dispatch = useDispatch();

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2> My Cart </h2>
          {cartItems.map((item) => (
            <div className="flex-container">
              <div className="text-left m-1 w-100">
                <h4>
                  {" "}
                  {item.name} [{item.varient}]{" "}
                </h4>
                <h5>
                  Price: {item.quantity} * {item.prices[0][item.varient]} =
                  {item.price}
                </h5>
                <h5 style={{ display: "inline" }}> Quantity:</h5>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity + 1, item.varient));
                  }}
                  className="icon"
                  color="green"
                />
                <b> {item.quantity}</b>
                <FontAwesomeIcon
                  icon={faMinus}
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity - 1, item.varient));
                  }}
                  className="icon"
                  color="red"
                />
                <hr className="hori-line" />
              </div>

              <div className="m-1 w-100">
                <img src={item.image} height="80" width="80" />
              </div>
              <div className="m-1 w-100">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="icon mt-5"
                  color="red"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}

export default CartScreen;
