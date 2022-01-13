import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const IsAuthenticated = () => {
  const auth = useSelector((state) => state.userReducer);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default IsAuthenticated;
