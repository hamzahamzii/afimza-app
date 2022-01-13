import React from "react";

import Button from "@mui/material/Button";
import { API_URL } from "../globals";

const LoginPage = () => {
  return (
    <div className="flex items-center p-4 flex-col">
      <h1 className="text-6xl">WELCOME TO AFIMZA</h1>
      <h1>You need to login</h1>
      <Button href={`${API_URL}/auth/google`}>LOGIN with google</Button>
    </div>
  );
};

export default LoginPage;
