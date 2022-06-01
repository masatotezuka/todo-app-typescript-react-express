import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FormTitleWrapper = styled.div`
  margin-top: 50px;
`;
const FormTitle = styled.p`
  font-weight: bold;
  text-align: center;
`;

const FormWrapper = styled.div`
  margin: 30px auto 0px auto;
`;

const Form = styled.form`
  background: rgba(128, 128, 128, 0.2);
  width: 40%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 30px;
  width: 85%;
  margin: 10px auto;
  border: 1px solid #bdbdbd;
`;

const Button = styled.button`
  color: white;
  font-weight: bold;
  background: #5876a3;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 10px auto;
  width: 40%;
`;

const MoveToPage = styled(Link)`
  color: #5876a3;
  justify-content: center;
  display: flex;
  text-decoration: none;
  margin-bottom: 20px;
  &:hover {
    opacity: 0.5;
  }
`;

const LinkWrapper = styled.div`
  margin: 0px auto 20px auto;
`;

export const ResetPasswordPage = () => {
  return (
    <div>
      <FormTitleWrapper>
        <FormTitle>メールアドレスを入力してください。</FormTitle>
      </FormTitleWrapper>
      <FormWrapper>
        <Form>
          <Input
            type="email"
            placeholder="メールアドレス"
            name="email"
            required
          ></Input>
          <Button>パスワードをリセット</Button>
        </Form>
        <LinkWrapper>
          <MoveToPage to="/">トップページに戻る</MoveToPage>
        </LinkWrapper>
      </FormWrapper>
    </div>
  );
};
