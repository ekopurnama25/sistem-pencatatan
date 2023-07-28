import React, { useContext } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Layouts from "../../components/Layouts";
import { Formik } from "formik";

import ExpenditureContext from "../../context/ExpenditureContext";
const AddExpenditurePages = () => {
  let navigate = useNavigate();
  const { AddExpenditure } = useContext(ExpenditureContext);
  return (
    <>
      <Layouts title="Add_Expenditure">
        <div className="p-4 sm:ml-64 bg-gray-300">
          <div className="p-6  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
            <Card className="mt-6 w-80">
              <CardBody>
                <Formik
                  initialValues={{
                    out_date: "",
                    expenditure_statement: "",
                    source_expenditure: "",
                    expenditure_amount: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.out_date) {
                      errors.out_date = "date cannot be empty";
                    } else if (!values.expenditure_statement) {
                      errors.expenditure_statement =
                        "keterangan pemasukan cannot be empty";
                    } else if (!values.source_expenditure) {
                      errors.source_expenditure =
                        "sumber pendapatan cannot be empty";
                    } else if (!values.expenditure_amount) {
                      errors.expenditure_amount =
                        "total pendapatan cannot be empty";
                    }
                    return errors;
                  }}
                  onSubmit={(expenditure) => {
                    const addexpenditure = AddExpenditure(expenditure);
                    if (addexpenditure) {
                      navigate("/expenditure");
                    }
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="flex flex-col gap-4">
                        <Input
                          name="out_date"
                          type="date"
                          label="Tanggal Pengeluran"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.out_date}
                        />
                        <Typography variant="small" color="red">
                          {errors.out_date &&
                            touched.out_date &&
                            errors.out_date}
                        </Typography>
                        <Input
                          name="expenditure_statement"
                          label="Keterangan Pengeluaran"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.expenditure_statement}
                        />
                        <Typography variant="small" color="red">
                          {errors.expenditure_statement &&
                            touched.expenditure_statement &&
                            errors.expenditure_statement}
                        </Typography>
                        <Input
                          name="source_expenditure"
                          label="Sumber Pengeluaran"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.source_expenditure}
                        />
                        <Typography variant="small" color="red">
                          {errors.source_expenditure &&
                            touched.source_expenditure &&
                            errors.source_expenditure}
                        </Typography>
                        <Input
                          name="expenditure_amount"
                          type="number"
                          label="Jumlah Pengeluaran"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.expenditure_amount}
                        />
                        <Typography variant="small" color="red">
                          {errors.expenditure_amount &&
                            touched.expenditure_amount &&
                            errors.expenditure_amount}
                        </Typography>
                      </div>

                      <Button type="submit" className="mt-6" fullWidth>
                        Save
                      </Button>
                    </form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </Layouts>
    </>
  );
};

export default AddExpenditurePages;
