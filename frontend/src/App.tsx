import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TopPage } from "./components/pages/TopPage";
import { TodoPage } from "./components/pages/TodoPage";
import { SignUpPage } from "./components/pages/SignUpPage";
import { LoginPage } from "./components/pages/LoginPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { ResetPasswordPage } from "./components/pages/UserPage";
import { PrivateRoute } from "./PrivateRouter";
import { useAppSelector } from "./app/hooks";
import axios from "axios";
axios.defaults.withCredentials = true;

const App: React.FC = () => {
  const userLogin = useAppSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* リセットページ */}
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/reset-password" element={<NotFoundPage />} />
        <Route
          path="/todo"
          element={
            <PrivateRoute
              isLoggedIn={userLogin}
              children={<TodoPage />}
            ></PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
