import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";

function OrdersScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: "35px" }} className="mt-3 text-center">
        My Orders
      </h2>
    </div>
  );
}

export default OrdersScreen;
