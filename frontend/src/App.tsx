import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { TodoPage } from "./pages/TodoPage";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ResetPasswordPage } from "./pages/UserPage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        {/* リセットページ */}
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
