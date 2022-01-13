import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const EnsureGuest = () => {
  const auth = useSelector((state) => state.userReducer);
  return auth ? <Navigate to="/" /> : <Outlet />;
};

export default EnsureGuest;
