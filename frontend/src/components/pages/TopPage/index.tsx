import React from "react";
import styled from "styled-components";
import { ButtonLink } from "../../parts/Button/ButtonLink";

const ButtonsWrapper = styled.div`
  padding: 0px 550px;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TopPage: React.FC = () => {
  return (
    <>
      <ButtonsWrapper>
        <ButtonWrapper>
          <ButtonLink path="/sign-up" text="新規登録"></ButtonLink>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonLink path="/login" text="ログイン"></ButtonLink>
        </ButtonWrapper>
      </ButtonsWrapper>
    </>
  );
};
