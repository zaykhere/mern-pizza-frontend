import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminRoute from "../components/AdminRoute";
import {Routes, Route, Link} from "react-router-dom";
import UsersList from "./UsersList";
import OrdersList from "./OrdersList";
import AddPizza from "./AddPizza";
import PizzasList from "./PizzasList";

function AdminScreen() {
  const dispatch = useDispatch();

  const loginUserReducer = useSelector((state) => state.loginUserReducer);
  const { userInfo } = loginUserReducer;

  useEffect(() => {}, []);

  return (
    <div>
      <div className="row justify-content-center text-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }} className="mt-3 mb-3 text-center">
            Admin Panel
          </h2>
          <ul className="admin-functions">
            <li>
              <Link to="/admin/userslist"> Users List </Link>
            </li>
            <li>
              <Link to="/admin/pizzaslist"> Pizzas List </Link>
            </li>
            <li>
              <Link to="/admin/addpizza"> Add New Pizza </Link>
            </li>
            <li>
              <Link to="/admin/orderslist"> Orders List </Link>
            </li>
          </ul>

          <Routes>
          <Route path="userslist" element={
            <AdminRoute>
                <UsersList />
            </AdminRoute>  
        } />
        <Route path="pizzaslist" element={
          <AdminRoute>
            <PizzasList />
          </AdminRoute>
        } />
        <Route path="orderslist" element={
          <AdminRoute>
            <OrdersList />
          </AdminRoute>
        } />
        <Route path="addpizza/*" element={
          <AdminRoute>
            <AddPizza />
          </AdminRoute>
        } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminScreen;
