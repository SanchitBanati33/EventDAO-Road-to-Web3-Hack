import React from "react";
import { Route } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

const ProtectedRoute = ({ component: Component, haveOrgTokens, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (haveOrgTokens) {
          return <Component {...props} />;
        } else {
          return <ErrorPage text={"LOCKED"} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
