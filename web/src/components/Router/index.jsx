import HomePages from "../../pages/Home";
import IncomePages from "../../pages/Income";
import LoginPages from "../../pages/Login";
import CheckUSersRouter from "../../utils/CheckUSersRouter";
import PrivateRoute from "../../utils/PrivateRoute";
import { Roles } from "../../utils/Roles";

const routes = [
  {
    path: "/",
    element: (
      <PrivateRoute allowRoles={[Roles.Admin]}>
        <CheckUSersRouter>
          <HomePages />
        </CheckUSersRouter>
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
