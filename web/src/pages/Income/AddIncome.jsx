import React, { useContext } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import Layouts from "../../components/Layouts";
import { Formik } from "formik";

import IncomeContext from "../../context/IncomeContext";
const AddIncomePages = () => {
  const { AddIncome } = useContext(IncomeContext);
  return (
    <>
      <Layouts title="Add_income">
        <div className="p-4 sm:ml-64 bg-gray-300">
          <div className="p-6  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
            <Card className="mt-6 w-80">
              <CardBody>
                <Formik
                  initialValues={{
                    date_of_entry: "",
                    income_statement: "",
                    source_of_income: "",
                    income_amount: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.date_of_entry) {
                      errors.date_of_entry = "date cannot be empty";
                    } else if (!values.income_statement) {
                      errors.income_statement =
                        "keterangan pemasukan cannot be empty";
                    } else if (!values.source_of_income) {
                      errors.source_of_income =
                        "sumber pendapatan cannot be empty";
                    } else if (!values.income_amount) {
                      errors.income_amount = "total pendapatan cannot be empty";
                    }
                    return errors;
                  }}
                  onSubmit={(income) => {
                    AddIncome(income);
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
                          name="date_of_entry"
                          type="date"
                          label="Tanggal Pemasukan"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.date_of_entry}
                        />
                        <Typography variant="small" color="red">
                          {errors.date_of_entry &&
                            touched.date_of_entry &&
                            errors.date_of_entry}
                        </Typography>
                        <Input
                          name="income_statement"
                          label="Keterangan Pemasukan"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.income_statement}
                        />
                        <Typography variant="small" color="red">
                          {errors.income_statement &&
                            touched.income_statement &&
                            errors.income_statement}
                        </Typography>
                        <Input
                          name="source_of_income"
                          label="Sumber Pemasukan"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.source_of_income}
                        />
                        <Typography variant="small" color="red">
                          {errors.source_of_income &&
                            touched.source_of_income &&
                            errors.source_of_income}
                        </Typography>
                        <Input
                          name="income_amount"
                          type="number"
                          label="Jumlah Pemasukan"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.income_amount}
                        />
                        <Typography variant="small" color="red">
                          {errors.income_amount &&
                            touched.income_amount &&
                            errors.income_amount}
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

export default AddIncomePages;
