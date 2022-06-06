import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  isLoggedIn: boolean;
  //1つ以上のReactコンポーネント
  children: React.ReactNode;
};

export const PrivateRoute: React.FC<Props> = React.memo((props) => {
  const { children, isLoggedIn } = props;
  return isLoggedIn ? <>{children}</> : <Navigate to="/" />;
});
