import ExpenditurePages from "../../pages/Expenditure";
import HomePages from "../../pages/Home";
import IncomePages from "../../pages/Income";
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
    path: "/expenditure",
    element: (
      <PrivateRoute allowRoles={[Roles.Admin]}>
        <CheckUsersRouter>
          <ExpenditurePages />
        </CheckUsersRouter>
      </PrivateRoute>
    ),
  },
];

export default routes;
