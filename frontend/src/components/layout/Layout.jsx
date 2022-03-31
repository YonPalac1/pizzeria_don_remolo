import React from "react";
import { useSelector } from "react-redux";
import { LoginRegister } from "./logginRegisterButtons/LoginRegister";
import { AdminMenu } from "./adminMenu/AdminMenu";
import { UserMenu } from "./userMenu/UserMenu";

export const Layout = () => {
  const rol = useSelector((store) => store.auth.rol);
  const logged = useSelector((store) => store.auth.ok);
  
  return (
    <>
    {!logged ? (
      <LoginRegister />
    ) : rol === 2 ? (
      <AdminMenu />
    ) : (
      <UserMenu />
    )}
  </>
  );
};
