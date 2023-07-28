import React from "react";
import Layouts from "../../components/Layouts";
import TableExpenditure from "./TableExpenditure";
const ExpenditurePages = () => {
  return (
    <>
      <Layouts title="expenditure">
        <div className="p-4 sm:ml-64 bg-gray-200">
          <div className="p-4  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <TableExpenditure />
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default ExpenditurePages;
