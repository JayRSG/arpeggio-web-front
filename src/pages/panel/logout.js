import { useEffect } from "react";
import withAuth from "../../components/withAuth";
import { LogoutServer } from "../../util/auth";

const Logout = () => {
  useEffect(() => {
    LogoutServer();
  }, []);

  return <>Logging Out...</>;
};

export default withAuth(Logout);
