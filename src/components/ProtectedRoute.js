import { Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const loginUserReducer = useSelector((state) => state.loginUserReducer);

  const { userInfo } = loginUserReducer;

  const useAuth = () => {
    const user =
      localStorage.getItem("userInfo") && Object.entries(userInfo).length > 0;
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const auth = useAuth();
  return auth?children: <Navigate to="/login"/>
};

export default ProtectedRoute;
