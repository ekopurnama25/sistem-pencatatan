import React from "react";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <>
      <div className="sm:ml-64 bg-gray-300">
        <footer className="p-3 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
          <Typography color="blue-gray" className="font-normal">
            &copy; 2023 Material Tailwind
          </Typography>
        </footer>
      </div>
    </>
  );
};

export default Footer;
