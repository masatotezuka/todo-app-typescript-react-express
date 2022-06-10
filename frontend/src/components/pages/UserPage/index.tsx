import React from "react";
import styled from "styled-components";
import { Link } from "../../parts/Link";
import { ResetPasswordForm } from "./components";

export const ResetPasswordPage = () => {
  return (
    <>
      <Wrapper>
        <FormWrapper>
          <FormTitle>メールアドレスを入力してください</FormTitle>
          <ResetPasswordForm></ResetPasswordForm>
          <LinkWrapper>
            <Link path="/" text="トップページに戻る"></Link>
          </LinkWrapper>
        </FormWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 50px 400px 0px 400px;
`;

const FormWrapper = styled.div`
  background: rgba(128, 128, 128, 0.2);
  padding: 20px 30px 20px 30px;
`;
const FormTitle = styled.p`
  font-weight: bold;
  text-align: center;
`;

const LinkWrapper = styled.div`
  margin: 20px auto 0px auto;
`;
