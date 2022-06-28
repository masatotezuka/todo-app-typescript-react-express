import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";
type Props = {
  children: React.ReactNode;
};

export const PrivateRoute: React.FC<Props> = React.memo((props) => {
  const { children } = props;

  const isAuthenticated = useAuth();
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }
  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <Navigate to="/" />;
});
