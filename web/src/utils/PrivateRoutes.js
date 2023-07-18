import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, allowRoles }) => {
  const { isAuthenticated } = useContext(AuthContext);

  console.log("users", isAuthenticated);
  let navigate = useNavigate();
  const userHasRequired =
    isAuthenticated && allowRoles.includes(isAuthenticated?.roles)
      ? true
      : false;
  console.log(userHasRequired, "role");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (isAuthenticated && !userHasRequired) {
    return <Navigate to="/login" />;
  }
  // else if (!user && userHasRequired)
  //   return <Navigate to="/login" replace={true} />;

  return children;
};

export default PrivateRoute;
