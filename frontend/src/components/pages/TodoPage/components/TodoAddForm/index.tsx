import React from "react";
import styled from "styled-components";
import { Button } from "../../../../parts/Button/Button";
import { InputText } from "../../../../parts/InputText";

export const TodoAddForm: React.FC = () => {
  return (
    <TodoAddWrapper>
      <InputWrapper width="300px">
        <InputText
          type="text"
          placeholder="タイトルを入力してください。"
          required={true}
        ></InputText>
      </InputWrapper>
      <InputWrapper width="400px">
        <InputText
          type="text"
          placeholder="詳細を入力してください。"
          required={true}
        ></InputText>
      </InputWrapper>
      <InputWrapper width="150px">
        <InputText type="date" placeholder="期限日" required={true}></InputText>
      </InputWrapper>
      <ButtonWrapper>
        <Button child="タスクの追加"></Button>
      </ButtonWrapper>
    </TodoAddWrapper>
  );
};

const TodoAddWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

type Props = {
  width?: string;
};
const InputWrapper = styled.div`
  width: ${(props: Props) => props.width};
  margin-right: 10px;
  height: 50px;
  display: flex;
`;

const ButtonWrapper = styled.div`
  height: 10%;
  width: 150px;
`;
