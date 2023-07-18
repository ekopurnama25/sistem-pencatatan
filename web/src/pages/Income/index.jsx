import React from "react";
import TableIncome from "./TableIncome";
import Layouts from "../../components/Layouts";
const IncomePages = () => {
  return (
    <>
      <Layouts title="Income">
        <div className="p-4 sm:ml-64 bg-gray-200">
          <div className="p-4  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <TableIncome />
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default IncomePages;
