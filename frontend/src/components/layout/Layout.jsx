import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginRegister } from "./logginRegisterButtons/LoginRegister";
import { AdminMenu } from "./adminMenu/AdminMenu";

export const Layout = () => {
  const dispatch = useDispatch();

  
  return (
    <>
      <LoginRegister />
    </>
  );
};
