import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({ allowedRoles, children }) => {
  const location = useLocation();

  const accessToken = localStorage.getItem("accessToken");
  const myPending = localStorage.getItem("pending");
  const roleValue = localStorage.getItem("role");

  // var  accessToken = JSON.parse(myAccessToken);
  var  pending = JSON.parse(myPending);
  // var  roleValue = JSON.parse(myRoleValue);

  const isAuthorized =
    allowedRoles.length === 0 || allowedRoles.some((role) => roleValue == role);

  console.log("accessToken", accessToken);

  return   (isAuthorized && !pending && accessToken !== "undefined" ) ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
