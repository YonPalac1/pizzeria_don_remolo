import React from "react";
import { Sidebar } from "../../components/Backoffice/Sidebar/Sidebar";

export const Backoffice = ({ children }) => {

  return <>
    <Sidebar />
    { children }
  </>
  
};
