import HomePages from "../../pages/Home";
import IncomePages from "../../pages/Income";
import LoginPages from "../../pages/Login";
import CheckUsersRouter from "../../utils/CheckUsersRouter";
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
    element: <IncomePages />,
  },
];

export default routes;
