import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { NavbarMobile } from "../components/navbar/NavbarMobile";

export const Layout = ({ children }) => {
  const location = useLocation().pathname;
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (location === "/backoffice/") {
      setFlag(false);
    }
  }, [Layout]);

  return (
    <>
      {!flag ? (
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
