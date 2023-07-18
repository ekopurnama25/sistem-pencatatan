import HomePages from "../../pages/Home";
import IncomePages from "../../pages/Income";
import LoginPages from "../../pages/Login";
import PrivateRoute from "../../utils/PrivateRoutes";
import { Role } from "../../utils/Roles";

const routes = [
  {
    path: "/",
    element: (
      <PrivateRoute allowRoles={[Role.Admin]}>
        <HomePages />
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
