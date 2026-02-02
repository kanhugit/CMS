import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAdmin = localStorage.getItem("role") === "ADMIN";

  return isAdmin ? children : <Navigate to="/" />;
}
