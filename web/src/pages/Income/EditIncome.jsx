import React, { useEffect, useContext } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import Layouts from "../../components/Layouts";

import IncomeContext from "../../context/IncomeContext";

const EditIncomePages = () => {
  const { incomeID, getIdIncome } = useContext(IncomeContext);
  const { id } = useParams();

  useEffect(() => {
    getIdIncome(id);
  }, [id]);

  console.log(incomeID?.date_of_entry);
  return (
    <>
      <Layouts title="Income">
        <div className="p-4 sm:ml-64 bg-gray-200">
          <div className="p-6  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
            <Card className="mt-6 w-80">
              <CardBody>
                <form className="space-y-6">
                  <div className="flex flex-col gap-4">
                    <Input
                      name="date_of_entry"
                      type="date"
                      label="Tanggal Pemasukan"
                      value={incomeID?.date_of_entry}
                    />
                    <Input
                      name="income_statement"
                      label="Keterangan Pemasukan"
                      value={incomeID?.income_statement}
                    />
                    <Input
                      name="source_of_income"
                      label="Sumber Pemasukan"
                      value={incomeID?.source_of_income}
                    />
                    <Input
                      name="income_amount"
                      type="number"
                      label="Jumlah Pemasukan"
                      value={incomeID?.income_amount}
                    />
                  </div>

                  <Button type="submit" className="mt-6" fullWidth>
                    Save
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default EditIncomePages;
