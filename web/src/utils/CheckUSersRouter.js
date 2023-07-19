import { useEffect, useState } from "react";
//import { CheckUsers } from "../service/auth";
import { useContext } from "react";
import CheckUSersContext from "../context/UsersContext";

import AuthContext from "../context/AuthContext";

const CheckUSersRouter = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { checkToken, checkUsers, setCheckUsers } =
    useContext(CheckUSersContext);
  //const [checkUsers, setCheckUsers] = useState();
  console.log(checkUsers);
  useEffect(() => {
    const CHECK = () => {
      checkToken(isAuthenticated?.accsesToken);
      //setCheckUsers(usersToken);
    };

    //setCheckUsers(CHECK);
    CHECK();
  }, []);

  return children;
};

export default CheckUSersRouter;
