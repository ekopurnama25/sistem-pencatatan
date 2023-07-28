import ExpenditurePages from "../../pages/Expenditure";
import AddExpenditurePages from "../../pages/Expenditure/AddExpenditure";
import EditExpenturePages from "../../pages/Expenditure/EditExpenture";
import HomePages from "../../pages/Home";
import IncomePages from "../../pages/Income";
import AddIncomePages from "../../pages/Income/AddIncome";
import EditIncomePages from "../../pages/Income/EditIncome";
import LoginPages from "../../pages/Login";
import CheckUsersRouter from "../../utils/CheckUSersRouter";
import PrivateRoute from "../../utils/PrivateRoute";
import { Roles } from "../../utils/Roles";

const routes = [
  {
    path: "/",
    element: (
      <PrivateRoute allowRoles={[Roles.Admin]}>
        <CheckUsersRouter>
          <HomePages />
        </CheckUsersRouter>
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/income",
    element: (
      <PrivateRoute allowRoles={[Roles.Admin]}>
        <CheckUsersRouter>
          <IncomePages />
        </CheckUsersRouter>
      </PrivateRoute>
    ),
  },
  {
    path: "/addIncome",
    element: (
      <PrivateRoute allowRoles={[Roles.Admin]}>
        <CheckUsersRouter>
          <AddIncomePages />
        </CheckUsersRouter>
      </PrivateRoute>
    ),
  },
  {
    path: "/expenditure",
    element: (
      <PrivateRoute allowRoles={[Roles.Admin]}>
        <CheckUsersRouter>
          <ExpenditurePages />
        </CheckUsersRouter>
      </PrivateRoute>
    ),
  },
  {
    path: "/updateincome/:id",
    element: (
      <PrivateRoute allowRoles={[Roles.Admin]}>
        <CheckUsersRouter>
          <EditIncomePages />
        </CheckUsersRouter>
      </PrivateRoute>
    ),
  },
  {
    path: "/addexpenditure",
    element: (
      <PrivateRoute allowRoles={[Roles.Admin]}>
        <CheckUsersRouter>
          <AddExpenditurePages />
        </CheckUsersRouter>
      </PrivateRoute>
    ),
  },
  {
    path: "/updateExpenture/:id",
    element: (
      <PrivateRoute allowRoles={[Roles.Admin]}>
        <CheckUsersRouter>
          <EditExpenturePages />
        </CheckUsersRouter>
      </PrivateRoute>
    ),
  },
];

export default routes;
