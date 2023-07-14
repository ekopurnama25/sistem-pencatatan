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
      <div className="p-4 sm:ml-64">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layouts;
