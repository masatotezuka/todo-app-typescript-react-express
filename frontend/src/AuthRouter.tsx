import React from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

export const PrivateRoute = React.memo(({ children }: Props) => {
  const check = useAuth();
  console.log(check);

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
  const { userId } = useParams();
  const check = useAuth();
  const location = useLocation();
  console.log(location.pathname);
  if (!check.checked) {
    return <div>Loading...</div>;
  }

  if (check.isAuthenticated) {
    return <Navigate to={`/todo/${userId}/active`} />;
  }

  return <>{children}</>;
});
