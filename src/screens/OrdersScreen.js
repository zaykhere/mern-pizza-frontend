import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

function OrdersScreen() {
  const dispatch = useDispatch();

  const orderState = useSelector(state=> state.getUserOrdersReducer);
  const {orders, error, loading} = orderState;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: "35px" }} className="mt-3 text-center">
        My Orders
      </h2>
      <div className="row justify-content-center">
        {loading && (<Loading />) }
        {error && (<Error error={error} />)}
        {orders && orders.map(order=> (
          <div className="col-md-8 m-2" style={{backgroundColor: 'whitesmoke'}}>
            <div className="h5 m-2 p-2 text-center">Order# ${order._id}</div>
            <div className="flex-container">
              <div>
                {order.orderItems.map(item=> (
                  <div className="text-left w-100 m-1 p-2"> 
                    <h3 style={{fontSize: '25px'}}> Items</h3>
                    <hr />
                    <h4> {item.name} [{item.varient}] * {item.quantity} = {item.price} </h4>   
                  </div>
                ))}
                <br />
              </div>
             
              <div className="text-left w-100 m-1 p-2">
                  <h3 style={{fontSize:'25px'}}> Address </h3>
                  <hr />
                  <h4> Street: {order.shippingAddress.street} </h4>
                  <h4> City: {order.shippingAddress.city} </h4>
                  <h4> Country: {order.shippingAddress.country} </h4>
                  <h4> PinCode: {order.shippingAddress.pincode} </h4>
              </div>
              <div className="text-left w-100 m-1 p-2">
              <h3 style={{fontSize:'25px'}}> Order Info </h3>
              <hr />
              <h4> Order Amount: {order.orderAmount} </h4>
              <h4> Date: {order.createdAt.substring(0,10)} </h4>
              <h4> Transaction Id: {order.transactionId} </h4>
              <h4> Order Id: {order._id} </h4>
              </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersScreen;
