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
import ExpenditureContext from "../../context/ExpenditureContext";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = [
  "No",
  "Tanggal",
  "Keterangan Pengeluaran",
  "Sumber Pengeluaran",
  "Jumlah Pengeluaran",
  "Action",
];

export default function TableExpenditure() {
  let navigate = useNavigate();
  const { expenditure, getAllExpenditure, DeleteDataExpenture } =
    useContext(ExpenditureContext);

  useEffect(() => {
    const getExpenditure = async () => {
      await getAllExpenditure();
      //setIncome(GETALLINCOME);
    };

    getExpenditure();
  }, []);

  const Add_Expenditure_Form = () => {
    return navigate("/addexpenditure");
  };

  const DeleteExpenture = async (id) => {
    await DeleteDataExpenture(id);
  };

  const GetIDExpenture = async (id) => {
    return navigate(`/updateExpenture/${id}`);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Expenditure
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <Button
              onClick={Add_Expenditure_Form}
              className="flex items-center gap-3"
              color="blue"
              size="sm"
            >
              Add Expenditure
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
            {expenditure &&
              expenditure?.data?.data?.map((Expenditure, index) => {
                const isLast = index + 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={Expenditure?.id_expenditure}>
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
                        {Expenditure?.out_date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Expenditure?.expenditure_statement}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Expenditure?.source_expenditure}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Expenditure?.expenditure_amount}
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
                          onClick={() =>
                            GetIDExpenture(Expenditure?.id_expenditure)
                          }
                        >
                          Edit
                        </Button>
                        <Button
                          size="md"
                          color="red"
                          onClick={() =>
                            DeleteExpenture(Expenditure?.id_expenditure)
                          }
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
