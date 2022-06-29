import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";
type Props = {
  children: React.ReactNode;
};

export const PrivateRoute = React.memo(({ children }: Props) => {
  const check = useAuth();

  if (!check.checked) {
    return <div>Loading...</div>;
  }
  if (check.isAuthenticated) {
    return <>{children}</>;
  }

  return <Navigate to="/" />;
});

export const GuestRoute = React.memo((props: Props) => {
  const { children } = props;

  const check = useAuth();

  if (!check.checked) {
    return <div>Loading...</div>;
  }

  if (check.isAuthenticated) {
    return <Navigate to="/todo/active" />;
  }

  return <>{children}</>;
});
