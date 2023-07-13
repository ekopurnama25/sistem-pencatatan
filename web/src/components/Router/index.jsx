import HomePages from "../../pages/Home";
import LoginPages from "../../pages/Login";

const routes = [
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
];

export default routes;
