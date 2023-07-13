import React from "react";
import { Children } from "react";

const CardComponent = ({ children }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
};

export default CardComponent;
