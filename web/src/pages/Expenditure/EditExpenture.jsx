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
import { Formik } from "formik";
import Layouts from "../../components/Layouts";

import ExpenditureContext from "../../context/ExpenditureContext";

const EditExpenturePages = () => {
  const { expentureID, setIdExpenture, getIdExpenture, UpdateExpenture } =
    useContext(ExpenditureContext);
  const { id } = useParams();

  useEffect(() => {
    getIdExpenture(id);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIdExpenture({ ...expentureID, [name]: value });
  };

  const EditExpeneure = () => {
    UpdateExpenture(id, expentureID);
  };

  return (
    <>
      <Layouts title="Edit_Expenditure">
        <div className="p-4 sm:ml-64 bg-gray-200">
          <div className="p-6  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
            <Card className="mt-6 w-80">
              <CardBody>
                <form className="space-y-6">
                  <div className="flex flex-col gap-4">
                    <Input
                      name="out_date"
                      type="date"
                      label="Tanggal Pengeluaran"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={expentureID?.out_date}
                    />
                    <Input
                      name="expenditure_statement"
                      label="Keterangan Pengeluaran"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={expentureID?.expenditure_statement}
                    />
                    <Input
                      name="source_expenditure"
                      label="Sumber Pengeluaran"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={expentureID?.source_expenditure}
                    />
                    <Input
                      name="expenditure_amount"
                      type="number"
                      label="Jumlah Pengeluaran"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={expentureID?.expenditure_amount}
                    />
                  </div>

                  <Button
                    onClick={() => EditExpeneure()}
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

export default EditExpenturePages;