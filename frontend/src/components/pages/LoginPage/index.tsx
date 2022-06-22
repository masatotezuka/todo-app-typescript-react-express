import React from "react";
import styled from "styled-components";
import { LoginForm } from "./components/LoginForm";
import { Link } from "../../parts/Link";

export const LoginPage: React.FC = () => {
  return (
    <>
      <Wrapper>
        <FormWrapper>
          <FormTitle>ログイン</FormTitle>
          <LoginForm></LoginForm>
          <LinkWrapper>
            <Link path="/" text="トップページに戻る"></Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link path="/reset-password" text="パスワードを忘れた"></Link>
          </LinkWrapper>
        </FormWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 600px;
  margin: 40px auto 0px auto;
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
