import React from "react";
import { Sidebar } from "../../components/Backoffice/Sidebar/Sidebar";
import './backoffice.css';

export const BackofficeLayout = ({ children }) => {
  return <div className="backofffice">
    <Sidebar />
    { children }
    </div>
  
};
