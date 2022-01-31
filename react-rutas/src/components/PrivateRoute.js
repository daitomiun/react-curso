import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const auth = true; // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />;
  // return (
  //   <Route exact={props.exact} path={props.path} component={props.component} />
  // );
};

export default PrivateRoute;
