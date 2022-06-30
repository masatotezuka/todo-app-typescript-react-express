import React from "react";
import styled from "styled-components";
import { Button } from "../../../../parts/Button/Button";
import { InputText } from "../../../../parts/InputText";

export const VerificationPasswordForm = () => {
  return (
    <>
      <Form>
        <FromTitle>新しいパスワードを入力してください</FromTitle>
        <InputText type="password" placeholder="パスワード"></InputText>
        <ButtonWrapper>
          <Button child="パスワードを登録" type="submit"></Button>
        </ButtonWrapper>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FromTitle = styled.p`
  font-weight: bold;
  font-size: 16;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 50%;
  margin: 30px auto 0px auto;
`;
