import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, deliverOrder } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

function OrdersList() {
  const dispatch = useDispatch();

  const getAllOrdersState = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = getAllOrdersState;

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error={error} />}
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr>
                <td> {order._id} </td>
                <td> {order.email} </td>
                <td> {order.userId} </td>
                <td> {order.orderAmount} </td>
                <td> {order.createdAt.substring(0, 10)} </td>
                <td>
                 
                  {order.isDelivered ? (
                    <p> Delivered </p>
                  ) : (
                    <button onClick={()=> {dispatch(deliverOrder(order._id))}}
                    className="btn" style={{ fontSize: "13px" }}>
                      
                      Deliver
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersList;
