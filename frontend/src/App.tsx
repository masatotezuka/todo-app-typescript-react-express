import React from "react";
import { Routes, Route } from "react-router-dom";
import { TopPage } from "./components/pages/TopPage";
import { TodoPage } from "./components/pages/TodoPage";
import { SignUpPage } from "./components/pages/SignUpPage";
import { LoginPage } from "./components/pages/LoginPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { ResetPasswordPage } from "./components/pages/UserPage";
import { PrivateRoute } from "./PrivateRouter";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0px auto;
`;
const App: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* リセットページ */}
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/todo/*"
            element={<PrivateRoute children={<TodoPage />}></PrivateRoute>}
          >
            <Route
              path="archived"
              element={<PrivateRoute children={<TodoPage />}></PrivateRoute>}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
