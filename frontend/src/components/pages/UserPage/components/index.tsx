import React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputText } from "../../../parts/InputText";
import { Button } from "../../../parts/Button/Button";

type Inputs = {
  email: string;
};

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <InputText
            type="text"
            placeholder="メールアドレス"
            register={register("email", { required: true })}
          ></InputText>
          {errors.email && "文字が入力されていません"}
        </InputWrapper>
        <ButtonWrapper>
          <Button type="submit" child="ログイン"></Button>
        </ButtonWrapper>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  padding: 0px 200px;
  margin-top: 20px;
`;
