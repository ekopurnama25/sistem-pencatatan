import React, { useEffect } from "react";
import NavbarComponent from "../Navbar";
import SidebarComponent from "../Sidebar";

const Layouts = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <>
      <NavbarComponent />
      <SidebarComponent />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layouts;
