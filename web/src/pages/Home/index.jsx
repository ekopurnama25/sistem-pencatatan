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

import ExpenditureContext from "../../context/ExpenditureContext";
import ChartDataHome from "./ChartHome";

const HomePages = () => {
  const { SumIncome, sumincome, resultkas, ResultKas } =
    useContext(IncomeContext);
  const { SumExpenditure, sumexpenture } = useContext(ExpenditureContext);

  useEffect(() => {
    const getSumIncome = async () => {
      await SumIncome();
      //setIncome(GETALLINCOME);
    };

    getSumIncome();
  }, []);

  useEffect(() => {
    const getSumExpenditure = async () => {
      await SumExpenditure();
      //setIncome(GETALLINCOME);
    };

    getSumExpenditure();
  }, []);

  useEffect(() => {
    const getResultKas = async () => {
      await ResultKas();
      //setIncome(GETALLINCOME);
    };

    getResultKas();
  }, []);

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
                <div className="flex gap-10">
                  <Typography variant="h5" color="red">
                    Pengeluaran :
                  </Typography>
                  {sumexpenture &&
                    sumexpenture.map((sumExpenture, index) => {
                      return (
                        <div key={index}>
                          <Typography variant="h5" color="red">
                            Rp.{" "}
                            {sumExpenture?.TotalExpenditure.toLocaleString()}
                          </Typography>
                        </div>
                      );
                    })}
                </div>
              </CardBody>
            </Card>
            <Card className="mt-1 w-full">
              <CardBody>
                <Typography variant="h5" color="blue">
                  Total Kas : Rp. {resultkas?.data.toLocaleString()}
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="flex gap-10 p-1 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
            <Card className="mt-1 w-full">
              <CardBody>
                <div style={{ textAlign: "center" }}>
                  <Typography variant="h5" color="blue">
                    DATA PENINGKATAN PEMASUKAN SETIAP TAHUN
                  </Typography>
                </div>
                <ChartDataHome />
              </CardBody>
            </Card>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default HomePages;
