import React, { useEffect, useContext } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import Layouts from "../../components/Layouts";

import IncomeContext from "../../context/IncomeContext";

const EditIncomePages = () => {
  let navigate = useNavigate();
  const { incomeID, setIdIncome, getIdIncome, UpdateIncome } =
    useContext(IncomeContext);
  const { id } = useParams();

  useEffect(() => {
    getIdIncome(id);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIdIncome({ ...incomeID, [name]: value });
  };

  const EditInCome = () => {
    //  e.preventDefault();
    const updateINC = UpdateIncome(id, incomeID);
    if (updateINC) {
      navigate("/income");
    }
  };

  return (
    <>
      <Layouts title="Edit_Income">
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
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={incomeID?.date_of_entry}
                    />
                    <Input
                      name="income_statement"
                      label="Keterangan Pemasukan"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={incomeID?.income_statement}
                    />
                    <Input
                      name="source_of_income"
                      label="Sumber Pemasukan"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={incomeID?.source_of_income}
                    />
                    <Input
                      name="income_amount"
                      type="number"
                      label="Jumlah Pemasukan"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={incomeID?.income_amount}
                    />
                  </div>

                  <Button
                    onClick={() => EditInCome()}
                    className="mt-6"
                    fullWidth
                  >
                    Edit
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
