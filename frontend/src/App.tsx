import React from "react";
import { Routes, Route } from "react-router-dom";
import { TopPage } from "./components/pages/TopPage";
import { TodoPage } from "./components/pages/TodoPage";
import { SignUpPage } from "./components/pages/SignUpPage";
import { LoginPage } from "./components/pages/LoginPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { ResetPasswordPage } from "./components/pages/UserPage/resetPassword";
import { GuestRoute, PrivateRoute } from "./AuthRouter";
import styled from "styled-components";
import { EmailSendComplete } from "./components/pages/UserPage/emailSendComplete";
import { VerificationPasswordPage } from "./components/pages/UserPage/verificationPassword.tsx";

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0px auto;
`;

const App: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route
            path="/"
            element={<GuestRoute children={<TopPage />}></GuestRoute>}
          />
          <Route
            path="/email-send-complete"
            element={<GuestRoute children={<EmailSendComplete />}></GuestRoute>}
          />
          <Route
            path="/sign-up"
            element={<GuestRoute children={<SignUpPage />}></GuestRoute>}
          />
          <Route
            path="/login"
            element={<GuestRoute children={<LoginPage />}></GuestRoute>}
          />
          <Route path="/email-send-complete" element={<EmailSendComplete />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          {/* TODO:tokenパラメータと一致したときにアクセスできるようにする */}
          <Route
            path={`/verification-password`}
            element={<VerificationPasswordPage />}
          />
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
