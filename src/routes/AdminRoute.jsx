import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/authContext";

const AdminRoute = ({ children }) => {
  const { role } = useContext(AuthContext);

  if (role !== "admin") return <Navigate to="/" />;

  return children;
};

export default AdminRoute;
