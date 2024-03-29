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
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = [
  "No",
  "Tanggal",
  "Keterangan Pemasukan",
  "Sumber Pendapatan",
  "Jumlah Pemasukan",
  "Action",
];

export default function TableIncome() {
  let navigate = useNavigate();
  const { income, setIncome, getAllIncome, DeleteIncome } =
    useContext(IncomeContext);

  useEffect(() => {
    const getIncome = async () => {
      const res = await getAllIncome();
      console.log(res);
      setIncome(res);
    };

    getIncome();
  }, []);

  const Add_Income_Form = () => {
    return navigate("/addIncome");
  };

  const Delete_Income = async (id) => {
    const incomedel = await DeleteIncome(id);
    console.log(incomedel);
    if (incomedel) {
      const deleteINC = income.filter((x) => {
        return x.id_income !== id;
      });
      console.log("hallo", deleteINC);
      setIncome(deleteINC);
    }
  };

  const GetIDIncome = async (id) => {
    return navigate(`/updateincome/${id}`);
  };

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
            <Button
              onClick={Add_Income_Form}
              className="flex items-center gap-3"
              color="blue"
              size="sm"
            >
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
              income?.map((Income, index) => {
                const isLast = index + 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={Income?.id_income}>
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
                        <Button
                          size="md"
                          onClick={() => {
                            GetIDIncome(Income?.id_income);
                          }}
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          size="md"
                          color="red"
                          onClick={() => {
                            Delete_Income(Income?.id_income);
                          }}
                        >
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
