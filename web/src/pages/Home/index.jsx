import React, { useContext, useEffect } from "react";
import Layouts from "../../components/Layouts";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Checkbox,
} from "@material-tailwind/react";

import IncomeContext from "../../context/IncomeContext";
const HomePages = () => {
  const { SumIncome, sumincome } = useContext(IncomeContext);

  useEffect(() => {
    const getSumIncome = async () => {
      await SumIncome();
      //setIncome(GETALLINCOME);
    };

    getSumIncome();
  }, []);

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  return (
    <>
      <Layouts title="Home">
        <div className="p-4 sm:ml-64 bg-gray-200">
          <div className="flex gap-10 p-4  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <Card className="mt-1 w-full">
              <CardBody>
                <div className="flex gap-10">
                  <Typography variant="h5" color="green">
                    Pemasukan :
                  </Typography>
                  {sumincome &&
                    sumincome.map((sumIncome, index) => {
                      return (
                        <div key={index}>
                          <Typography variant="h5" color="green">
                            Rp. {sumIncome?.minPrice.toLocaleString()}
                          </Typography>
                        </div>
                      );
                    })}
                </div>
              </CardBody>
            </Card>
            <Card className="mt-1 w-full">
              <CardBody>
                <h1>
                  <b>Pengeluaran :</b>
                </h1>
              </CardBody>
            </Card>
            <Card className="mt-1 w-full">
              <CardBody>
                <h1>
                  <b>Sisa Kas :</b>
                </h1>
              </CardBody>
            </Card>
          </div>
          <div className="flex gap-10 p-1 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
            <Card className="mt-1 w-full">
              <CardBody>
                <h1>HALLO</h1>
              </CardBody>
            </Card>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default HomePages;
