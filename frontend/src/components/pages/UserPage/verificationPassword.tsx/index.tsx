import React from "react";
import styled from "styled-components";

import { VerificationPasswordForm } from "./components";

export const VerificationPasswordPage = () => {
  return (
    <Wrapper>
      <VerificationPasswordForm></VerificationPasswordForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 600px;
  margin: 50px auto 0px auto;
  background: rgba(128, 128, 128, 0.2);
  padding: 10px 20px;
`;
