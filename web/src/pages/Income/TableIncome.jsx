import React, { useContext, useEffect } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
} from "@material-tailwind/react";
import IncomeContext from "../../context/IncomeContext";

const TABLE_HEAD = [
  "No",
  "Tanggal",
  "Keterangan Pemasukan",
  "Sumber Pendapatan",
  "Jumlah Pemasukan",
  "Action",
];

const TABLE_ROWS = [
  {
    no: "1",
    income_statement: "Spotify",
    source_of_income: "$2,500",
    date_of_entry: "Wed 3:00pm",
    income_amount: "paid",
  },
];

export default function TableIncome() {
  const { income, getAllIncome } = useContext(IncomeContext);

  useEffect(() => {
    const getIncome = async () => {
      await getAllIncome();
      //setIncome(GETALLINCOME);
    };

    getIncome();
  }, []);

  console.log(income);
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Income
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <Button className="flex items-center gap-3" color="blue" size="sm">
              Add Income
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {income &&
              income?.data?.data?.map((Income, index) => {
                const isLast = index + 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {isLast}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Income?.date_of_entry}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Income?.income_statement}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Income?.source_of_income}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Income?.income_amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <Button size="md">Edit</Button>{" "}
                        <Button size="md" color="red">
                          Delete
                        </Button>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
