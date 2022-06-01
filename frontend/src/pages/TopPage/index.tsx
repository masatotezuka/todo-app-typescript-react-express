import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled(Link)`
  color: white;
  font-weight: bold;
  background: #5876a3;
  padding: 10px 30px;
  display: inline-block;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 30px;
`;

export const TopPage: React.FC = () => {
  return (
    <>
      <ButtonWrapper>
        <Button to="/sign-up">新規登録</Button>
        <Button to="/login">ログイン</Button>
      </ButtonWrapper>
    </>
  );
};
