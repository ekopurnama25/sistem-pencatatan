import React, { useEffect } from "react";
import Footer from "../Footer";
import NavbarComponent from "../Navbar";
import SidebarComponent from "../Sidebar";
import "./layout.css";

const Layouts = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <>
      <NavbarComponent />
      <SidebarComponent />
      <div className="main-body ">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layouts;
