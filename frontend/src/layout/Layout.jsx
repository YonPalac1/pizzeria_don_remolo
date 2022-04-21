import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { NavbarMobile } from "../components/navbar/NavbarMobile";

export const Layout = ({ children }) => {
  const location = useLocation().pathname;

  useEffect(() => {
  }, [Layout]);

  return (
    <>
      {location === "/backoffice/" || location === "/backoffice/list-products" || location === "/backoffice/add-products" ? (
        <></>
      ) : (
        <>
          <Navbar />
          <NavbarMobile />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};
