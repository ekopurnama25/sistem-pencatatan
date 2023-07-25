import { useEffect, useState } from "react";
//import { CheckUsers } from "../service/auth";
import { useContext } from "react";
import CheckUsersContext from "../context/UsersContext";

import AuthContext from "../context/AuthContext";

const CheckUsersRouter = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { checkToken, checkUsers, setCheckUsers } =
    useContext(CheckUsersContext);
  //const [checkUsers, setCheckUsers] = useState();
  //console.log(checkUsers);
  useEffect(() => {
    checkToken(isAuthenticated?.accsesToken);
  }, []);

  return children;
};

export default CheckUsersRouter;
